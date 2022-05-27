import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["text"]
  static classes = ["hidden"]

  hidden(){
    this.textTarget.classList.toggle(this.hiddenClass)
  }

}