<?php 

namespace App\Http\Controllers;


use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Symfony\Component\HttpFoundation\Response;
 
class LoginController extends Controller
{

    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        $user = User::where('email', $request->email)->first();


        if (!$user || !Hash::check($credentials['password'], $user->password)) {
            // Authentication passed...
            return response('Fail', 400);
            
        } else {
            return $user->createToken($request->device_name)->plainTextToken;
        }
    }

    public function signUp(Request $request)
    {
        $user_exist = User::where('email', $request->email)->first();
        if ($user_exist) return response('User exist', 400);

        $user = new User;
        $user->name = $request->name;
        $user->email= $request->email;
        $user->password = Hash::make($request->password);
        $user->save();
        return $user->createToken($request->device_name)->plainTextToken;
    }
}