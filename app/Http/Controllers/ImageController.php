<?php

namespace App\Http\Controllers;

use App\Models\Image;
use League\Glide\Server;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Response;

class ImageController extends Controller
{

    public function show(Request $request, Server $server, $path)
	{
        return $server->getImageResponse($path, $request->all());
	}

	/**
	 * upload Image via ajax. the associated model id and other information will be provided in the request
	 *
	 * @param  Request $request
	 *
	 * @return json
	 */
	public function upload(Request $request)
	{
        if ($request->hasFile('images')){
			$data = [];
			$dir = 'images';
			$files = $request->file('images');

        	foreach ($files as $order => $file) {
		        $path = Storage::put($dir, $file);

				$data[] = [
		            'path' => $path,
		            'name' => $file->getClientOriginalName(),
		            'extension' => $file->getClientOriginalExtension(),
		            'size' => $file->getClientSize(),
		            'order' => $order
		        ];
			}

        	$model = "App\Models\\".$request->input('model_name');
        	$attachable = (new $model)->find($request->input('model_id'));

			if($attachable->images()->createMany($data)){
				return Response::json(['success' => trans('response.success')]);
			}
			else{
	            $request->session()->flash('global_msg', trans('app.image.img_upload_failed'));
			}

			return Response::json(['error' => trans('responses.error')]);
        }

        return Response::json([]);
	}

	/**
	 * download Image file
	 *
	 * @param  Request    $request
	 * @param  Image $image
	 *
	 * @return file
	 */
	public function download(Request $request, Image $image)
	{
	    if (Storage::exists($image->path))
	        return Storage::download($image->path, $image->name);

		return back()->with('error', trans('app.image.file_not_exist'));
	}

	/**
	 * delete Image via ajax request
	 *
	 * @param  Request    $request
	 * @param  Image $image
	 *
	 * @return json
	 */
	public function delete(Request $request, Image $image)
	{
    	$image->delete();

	    if (Storage::exists($image->path)){
	        if(Storage::delete($image->path)){
				Storage::deleteDirectory(image_cache_path($image->path));
				return Response::json(['success' => trans('response.success')]);
	        }

			return Response::json(['error' => trans('response.error')]);
	    }

		return Response::json(['error' => trans('app.image.file_not_exist')]);
	}


	/**
	 * sort images order via ajax.
	 *
	 * @param  Request $request
	 *
	 * @return json
	 */
	public function sort(Request $request)
	{
        $order = $request->all();
        $images = Image::find(array_keys($order));

        foreach ($images as $image) {
        	$image->update([ 'order' => $order[$image->id] ]);
        }

		return Response::json(['success' => trans('response.success')]);
	}
}
