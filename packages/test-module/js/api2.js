// import data from "../../static/Order.json"
// let dataContent = JSON.parse(JSON.stringify(data))

// class A{
//   constructor(dataContent){
//     this.dataContent = dataContent
//   }
//   getData1(){
//     return this.dataContent
    
//   }
// }


// export {

// }
import axios from 'axios'
class BaseOrde{
  constructor(options){
    this.id = options.id
    this.price = options.price
    this.draftNum = options.draftNum
    this.acceptor = options.acceptor
    this.dealDate = options.dealDate
  }
  getId(){
    return this.id
  }
  getPrice(){
    return this.price
  }
  getdraftNum(){
    return this.draftNum
  }
  getacceptor(){
    return this.acceptor
  }
  getdealDate(){
    return this.dealDate
  }
  static generateConstructorOptions (apiData){
    return {
      id:apiData.id,
      price:apiData.price,
      draftNum:apiData.draftNum,
      acceptor:apiData.acceptor,
      dealDate:apiData.dealDate
    }
  }
  
  static createByApiData(apiData){
    return new BaseOrde(
      BaseOrde.generateConstructorOptions(apiData)
    )
  }
  static async getData(){ 
    try{
      const res = []
      const p = await axios.get('http://rap2api.taobao.org/app/mock/265540/getDraftList')
      p.data.data.forEach(apiData => {
        const resItem =  BaseOrde.createByApiData(apiData)
        res.push(resItem)
      });
      return res
    }catch(err){
      console.log(err)
    }
  }
}

export {
  BaseOrde
}
// static async getOrdersByMemberId (memberId: string): Promise<Array<BaseOrder>> {
//   const resp: Ajax.AjaxResponse<Array<ApiResponse.ApiData>> = await BaseOrderAPI.getOrdersByMemberId(memberId)

//   if (!resp.data) throw new Error('[ServerResponseError]缺少 data 字段')

//   const orders: Array<BaseOrder> = []

//   resp.data.forEach((apiData: ApiResponse.ApiData) => {
//     const order: BaseOrder = BaseOrder.createByApiData(apiData)
//     orders.push(order)
//   })
//   return orders
// }