import axios from  'axios'

class Basesheng {
    constructor(options) {
        this.id = options.id,
            this.draftId = options.draftId
            this.saleCompany = options.saleCompany
            this.buyCompany = options.buyCompany
            this.status = options.status
    }
    getId() {
        return this.id
    }
    getPrice() {
        return this.draftId
    }
    getsaleCompany(){
        return this.saleCompany
    }
    getbuyCompany(){
        return this.buyCompany
    }
    getstatus(){
        return this.status
    }
    static createApiItem(element) {
        return {
            id: element.id,
            draftId: element.draftId,
            saleCompany:element.saleCompany,
            buyCompany:element.buyCompany,
            status:element.status
        }
    }
    static createImageBitmap1(element) {
      return  new Basesheng(
            Basesheng.createApiItem(element)
        )
    }
    static async getData() {
        try {
            let res = []
            let p = await axios.get("http://rap2api.taobao.org/app/mock/265540/getOrderList")
            // console.log(p.data.data)
            p.data.data.forEach(element => {
                let ac = Basesheng.createImageBitmap1(element)
                res.push(ac)

            });
            return res
        } catch (err) {
            console.log(err)
        }
    }
}


export {
    Basesheng
}