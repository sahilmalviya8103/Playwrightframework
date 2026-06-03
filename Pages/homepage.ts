import{Page} from '@playwright/test'


class LoginPage{


  page: Page;
   constructor(page:Page){
    this.page = page;
  }

 tb_username = "//input[@name='user_name']"
 tb_password = "//input[@name='user_password']"
 loc_btn_click = ""

 


async login(Userid: string, Password: string ): Promise<void>{
  
  await this.page.fill(this.tb_username, Userid)
}

async setlogin(Userid: string): Promise<void>{




}

}