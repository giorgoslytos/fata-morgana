import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fb-images',
  templateUrl: './fb-images.component.html',
  styleUrls: ['./fb-images.component.scss']
})
export class FbImagesComponent implements OnInit {
  images: Array<object>;
  constructor() {}

  ngOnInit() {
    this.images = [
      {
        img:
          'https://scontent.fath5-1.fna.fbcdn.net/v/t1.0-9/40222282_2159110011012796_1779902338010447872_n.jpg?_nc_cat=100&_nc_oc=AQmEsMGlEqY782NIBIngW4osP846FzWgrjB76zcrR875nzyGYCagJEoPq6Xx15xGHTY&_nc_ht=scontent.fath5-1.fna&oh=798bbc9a6158c19cc17d0e07c77c84d7&oe=5E090133',
        src:
          'https://www.facebook.com/fatamorganathessaloniki/photos/a.2130476113876186/2159110007679463/?type=3&theater'
      },
      {
        img:
          'https://scontent.fath5-1.fna.fbcdn.net/v/t1.0-9/51929242_2257265411197255_460905816845713408_o.jpg?_nc_cat=109&_nc_oc=AQmkKX5-f_-e_grBYBIoARktEJ5Q1E9zG6ISSOC9F5t9BZXij8ZwTVko26_FvtJXvh8&_nc_ht=scontent.fath5-1.fna&oh=b05ca681af52d6b4770aa718b361c8cd&oe=5DFF6C17',
        src:
          'https://www.facebook.com/fatamorganathessaloniki/photos/a.2130476113876186/2257265407863922/?type=3&theater'
      },
      {
        img:
          'https://scontent.fath5-1.fna.fbcdn.net/v/t1.0-9/41974086_2170342739889523_8370502913256062976_n.jpg?_nc_cat=102&_nc_oc=AQnniHZOtfps4NHdAd1HLXjAJvgq5yIYsUQt6BW6HtDZ65N3lCxjyRuv0RyyGiEmcm0&_nc_ht=scontent.fath5-1.fna&oh=419ae86d05cbff93fe4f8d8bc317c9e7&oe=5E05926C',
        src:
          'https://www.facebook.com/fatamorganathessaloniki/photos/a.2153222958268168/2170342733222857/?type=3&theater'
      },
      {
        img:
          'https://scontent.fath5-1.fna.fbcdn.net/v/t1.0-9/52598756_2265261917064271_5705412278011035648_o.jpg?_nc_cat=101&_nc_oc=AQlb0E115ED5bHFBdjUobtGmD4V5lfYkwpCQa3jP_cTUPRtsKdzheX3bm_R_kEL4GOg&_nc_ht=scontent.fath5-1.fna&oh=5b7cb0b5153b2fa050d25cb9fd1521ad&oe=5DF7E9AA',
        src:
          'https://www.facebook.com/fatamorganathessaloniki/photos/a.2130476113876186/2265261910397605/?type=3&theater'
      },
      {
        img:
          'https://scontent.fath5-1.fna.fbcdn.net/v/t1.0-9/52951132_2270843929839403_1163439059175997440_o.jpg?_nc_cat=107&_nc_oc=AQlDpTCrWAgHXnVlWsnaDNpjVQZ1bct5JDlBfMvvv421H6Nhsy4l1M9AHhaDMWQxsV0&_nc_ht=scontent.fath5-1.fna&oh=11623f3ab8a39b9f32da2cf2f3e31279&oe=5DFAF18C',
        src:
          'https://www.facebook.com/fatamorganathessaloniki/photos/a.2130476113876186/2270843926506070/?type=3&theater'
      },
      {
        img:
          'https://scontent.fath5-1.fna.fbcdn.net/v/t1.0-9/41716496_2167336850190112_9010951325285875712_o.jpg?_nc_cat=106&_nc_oc=AQm0QVwJoZr8mKcoVoP_AFKVSV9oYjaVFPeWqCpWZxtnpOj7shIkS4hVQYe1a-oGTt8&_nc_ht=scontent.fath5-1.fna&oh=3fe0bda1b364396f87156f903b5eca28&oe=5E0683D5',
        src:
          'https://www.facebook.com/fatamorganathessaloniki/photos/a.2153222958268168/2167336846856779/?type=3&theater'
      },
      {
        img:
          'https://scontent.fath5-1.fna.fbcdn.net/v/t1.0-9/42173482_2170913039832493_7782076085713240064_o.jpg?_nc_cat=104&_nc_oc=AQk-RFwgIqi2XwU3knCBskOSzBL2KcMZQkrBGeq4--IhhBvPx7-bqeW3tUwrYU-EGa4&_nc_ht=scontent.fath5-1.fna&oh=da5cde604b8e836948f0f39d69182b20&oe=5E076B3F',
        src:
          'https://www.facebook.com/fatamorganathessaloniki/photos/a.2153222958268168/2170913036499160/?type=3&theater'
      },
      {
        img:
          'https://scontent.fath5-1.fna.fbcdn.net/v/t1.0-9/56347728_2288453231411806_7441544870595919872_o.jpg?_nc_cat=111&_nc_oc=AQni6XXsrh1f_037VXAGFSh5SCTNASYXcC66hBOCUd38FzWRva-DBWniex0L9FON2Dg&_nc_ht=scontent.fath5-1.fna&oh=26f19a7454ade7ad68be682d5a861f5e&oe=5E3DBF20',
        src:
          'https://www.facebook.com/fatamorganathessaloniki/photos/a.2130476113876186/2288453228078473/?type=3&theater'
      },
      {
        img:
          'https://scontent.fath5-1.fna.fbcdn.net/v/t1.0-9/50297771_2240835342840262_6575957820552773632_n.jpg?_nc_cat=105&_nc_oc=AQkWOOb1CDNZojMM7vhf1qZijznCvaN1FPIsocWhHBtvITTLtXwVUZNVi_GXby1pFFA&_nc_ht=scontent.fath5-1.fna&oh=4f4ea6239a307396c94b1d0c10ab2f2b&oe=5E008682',
        src:
          'https://www.facebook.com/fatamorganathessaloniki/photos/a.2130476113876186/2240835332840263/?type=3&theater'
      },
      {
        img:
          'https://scontent.fath5-1.fna.fbcdn.net/v/t1.0-9/43224584_2178677349056062_3293870806542581760_n.jpg?_nc_cat=108&_nc_oc=AQmgFx4FPuRw9UrUbKfi9i8QDggvOnMy0tSA7nTwz82KoVc3a49EsrfPa_Zn1uLhhvg&_nc_ht=scontent.fath5-1.fna&oh=04c7221bef0fcebf1c302bddfcd7486d&oe=5E054A00',
        src:
          'https://www.facebook.com/fatamorganathessaloniki/photos/a.2153222958268168/2178677342389396/?type=3&theater'
      }
    ];
  }
}
