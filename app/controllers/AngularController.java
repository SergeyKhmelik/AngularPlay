package controllers;

import play.mvc.Controller;
import play.mvc.Result;

import views.html.*;

public class AngularController extends Controller {


    public Result mainPage(){
        return ok(mainpage.render());
    }

}
