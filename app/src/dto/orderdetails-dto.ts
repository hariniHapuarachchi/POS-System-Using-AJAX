export class OrderDetailsDTO{
    constructor(public orderId:string,public itemCode:string,public qty:number,public total:number){}
}