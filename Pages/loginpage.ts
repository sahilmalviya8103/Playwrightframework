import{Page} from '@playwright/test'

class Home{


  page: Page;
   constructor(page:Page)
   {this.page = page;}


 tb_username = "//input[@name='user_name']"
 tb_password = "//input[@name='user_password']"
 loc_btn_click = "//input[@name='Login']"
 
 
async login(Userid: string, Password: string ): Promise<void>
{
  
  await this.setlogin(Userid)
  await this.setpassword(Password)
  await this.clicklogin()

}

async setlogin(Userid: string): Promise<void>
{
await this.page.fill(this.tb_username, Userid)

}


async setpassword(Password: string): Promise<void>
{
  await this.page.fill(this.tb_password, Password)
}


async clicklogin(): Promise<void>
{
  await this.page.click(this.loc_btn_click)
}




}