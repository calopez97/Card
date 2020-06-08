import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.scss']
})
export class PagoComponent implements OnInit {
metodospago=[
  {
    "link":"https://www.pichincha.com/",
    "imagen":"https://www.icardlink.com/recursos/2020/04/Banco-pichincha-ecuador.svg"
  },
  {
    "link":"https://www.paypal.com/",
    "imagen":"https://www.icardlink.com/recursos/2020/04/payàl.svg"
  },
  {
    "link":"https://www.payoneer.com/",
    "imagen":"https://www.icardlink.com/recursos/2020/04/payoneer.svg"
  },
  {
    "link":"https://wwww.airtm.com/",
    "imagen":"https://www.icardlink.com/recursos/2020/04/airtm-1.svg"
  },
  {
    "link":"https://www.bitcoin.com/",
    "imagen":"https://www.icardlink.com/recursos/2020/04/bitcoin.svg"
  },
  {
    "link":"https://www.advcash.com/",
    "imagen":"https://www.icardlink.com/recursos/advcash.svg"
  },
  {
    "link":"https://www.2checkout.com/",
    "imagen":"https://www.icardlink.com/recursos/2checkout.svg"
  },
  {
    "link":"https://www.platincoin.com/",
    "imagen":"https://www.icardlink.com/recursos/2020/04/Platincoiin.svg"
  },
]
  constructor() { }

  ngOnInit(): void {
  }

}
