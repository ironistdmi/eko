<?php


namespace App\Http\Controllers\Api;

/**
 * @OA\Info(
 *     title="Ekofarmer API documentation",
 *     version="1.0.0",
 *     @OA\Contact(
 *         email="d5721299@gmail.com"
 *     ),
 *     @OA\License(
 *         name="Apache 2.0",
 *         url="http://www.apache.org/licenses/LICENSE-2.0.html"
 *     )
 * )
 * @OA\Tag(
 *     name="Auth",
 *     description="Auth links",
 * )
 * @OA\Tag(
 *     name="Products",
 *     description="Products links",
 * )
 * @OA\Tag(
 *     name="Reviews",
 *     description="Reviews links",
 * )
 * @OA\Server(
 *     description="Ekofarmer API server",
 *     url="http://localhost/api"
 * )
 * @OA\SecurityScheme(
 *     type="apiKey",
 *     in="header",
 *     name="X-APP-ID",
 *     securityScheme="X-APP-ID"
 * )
 */

class Controller extends \App\Http\Controllers\Controller
{

}
