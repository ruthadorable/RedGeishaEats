import { Component, OnInit } from '@angular/core'
import { NgForm } from '@angular/forms'
import { Router } from '@angular/router'
import { GlobalService } from 'src/app/services/global/global.service'
import { AuthService } from 'src/app/services/shared/auth.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  isLoading: boolean = false

  constructor(
    private authService: AuthService,
    private router: Router,
    private global: GlobalService,
  ) {}

  ngOnInit() {
    this.isLoggedIn()
  }

  async isLoggedIn() {
    try {
      this.global.showLoader()
      const val = await this.authService.getId()
      console.log(val)
      if (val) this.navigate()
      this.global.hideLoader()
    } catch (e) {
      console.log(e)
      this.global.hideLoader()
    }
  }

  onSubmit(form: NgForm) {
    if (!form.valid) return
    this.register(form)
  }

  register(form: NgForm) {
    this.isLoading = true
    console.log(form.value)
    this.authService
      .register(form.value)
      .then(() => {
        this.navigate()
        this.isLoading = false
        form.reset()
      })
      .catch((e) => {
        console.log(e)
        this.isLoading = false
        let msg: string = 'Could not sign you up, please try again.'
        if (e.code == 'auth/email-already-in-use') {
          msg = e.message
        }
        this.global.showAlert(msg)
      })
  }

  navigate() {
    this.router.navigateByUrl('/tabs')
  }
}
