import { Component, OnInit, AfterViewInit } from '@angular/core';
declare let $: any;
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, AfterViewInit {
  public menus = [
  {name :'Người dùng', url:'',icon:'user',childs:[{name:'Quản lý người dùng',url:'user/user'},{name:'Quản lý Khách Hàng', url:'user/khachhang'}]},
  {name:'Quản lý',url:'',icon:'signal',childs:[{name:'Quản lý hợp đồng',url:'/product/hopdong'},{name:'Quản lý chi tiết hợp đồng',url:'/product/chitiethopdong'},{name:'Quản lý loại máy tính',url:'/product/loai'},{name:'Quản lý nhà sản xuất',url:'/product/nhasanxuat'},{name:'Quản lý sản phẩm',url:'/product/sanpham'}]}];
  constructor() { } 
  ngOnInit(): void {
  }
  ngAfterViewInit() {
    $('#sidebar-collapse').click(function () {
      setTimeout(() => {
        let event;
        if (typeof (Event) === 'function') {
          event = new Event('resize');
        } else {
          event = document.createEvent('Event');
          event.initEvent('resize', true, true);
        }
        window.dispatchEvent(event);
      }, 100);
      if (!$('#sidebar').hasClass('menu-min')) {
        $('.main-content').css('padding-left', '43px');
        $('.footer-inner').css('left', '43px');
      } else {
        $('.main-content').css('padding-left', '190px');
        $('.footer-inner').css('left', '190px');
      }
    });
    setTimeout(() => {
      let event;
      if (typeof (Event) === 'function') {
        event = new Event('resize');
      } else {
        event = document.createEvent('Event');
        event.initEvent('resize', true, true);
      }
      window.dispatchEvent(event);
    }, 100);
    setTimeout(() => {
      $('.main-content').css('padding-left', $('#sidebar').width() + 1);
      $('.footer-inner').css('left', $('#sidebar').width() + 1);
    }, 100);
  }
}
