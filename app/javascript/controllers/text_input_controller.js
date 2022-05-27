import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["input","output"]
  copy() {}

  changed() {
      this.outputTarget.textContent = this.inputTarget.value
  }
}