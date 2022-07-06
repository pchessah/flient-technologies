import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: 'landing-page.component.html',
  styleUrls: ['landing-page.component.scss']
})

export class LandingPageComponent implements OnInit {
  constructor() { }

  ngOnInit() { }

  getShopifyIcon = () => 'assets/landing-page/shopify-icon.svg';

  getCloudServerImg = () => 'assets/landing-page/cloud-server.svg';

  getLaptopImg = () => 'assets/landing-page/laptop-icon.svg';

  getInternetTechImg = () => 'assets/landing-page/internet-tech.jpg';

  getWebDesignImg = () => 'assets/landing-page/web-design.svg';
}