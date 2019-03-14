package me.tobiadeyinka.expvuemustache

import org.springframework.stereotype.Controller
import org.springframework.ui.Model
import org.springframework.ui.set
import org.springframework.web.bind.annotation.GetMapping

@Controller
class Controller {

    @GetMapping("/")
    fun blog(model: Model): String {
        model["title"] = "hello"
        model["user"] = "tobi"
        return "index"
    }

}