<?php

/*
|--------------------------------------------------------------------------
| Broadcast Channels
|--------------------------------------------------------------------------
|
| Here you may register all of the event broadcasting channels that your
| application supports. The given channel authorization callbacks are
| used to check if an authenticated user can listen to the channel.
|
*/

Broadcast::channel('dialog.{dialog_id}', function ($user, $dialog_id) {
	if($user->rooms->contains($dialog_id)){
		return $user->name;
	}
});