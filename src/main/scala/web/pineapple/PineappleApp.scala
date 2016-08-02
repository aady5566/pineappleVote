package web.pineapple


import scala.scalajs.js.JSApp
import org.scalajs.dom
import org.scalajs.jquery.jQuery

/**
  * Created by YD on 2016/8/2.
  */
object PineappleApp extends JSApp {
  def addClickedMessage(): Unit = {
    jQuery("body").append("<p>You clicked the button!</p>")

  }

  def setupUI(): Unit = {
    jQuery("#click-me-button2").click(addClickedMessage _)
  }

  def main(): Unit = {
    jQuery(setupUI _)
  }
}
