import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SaleProduct } from 'src/app/model/product/sale/saleproduct';
import { AuthService } from 'src/app/service/auth-service/auth.service';
import { SaleproductService } from '../../service/sale-service/saleproduct.service';

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.css']
})
export class WarehouseComponent implements OnInit {
  userId: any;
  saleList: SaleProduct[] = [];
  p = 1;


  constructor(
    private userService: AuthService,
    private saleProductService: SaleproductService,
    private active: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.active.params.subscribe(params => {
      this.userId = params['id'];
    })

    this.saleProductService.getAllSale().subscribe(data =>{
      this.saleList = data;
    })
  }

}
