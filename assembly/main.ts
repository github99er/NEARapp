
import { Context, logging, storage, PersistentMap,} from "near-sdk-as";

let customerInventory=new PersistentMap<string,string[]>("c")


export function deliverProducts(checkout:string[]):void{
    if(customerInventory.contains(Context.sender)){
      let currInv:string[]=customerInventory.getSome(Context.sender)
      for (let i=0;i<checkout.length;i++){
        currInv.push(checkout[i])
      }
      customerInventory.set(Context.sender,currInv)
      logging.log(customerInventory.getSome(Context.sender))
    }
    else{
      customerInventory.set(Context.sender,checkout)
      logging.log(customerInventory.getSome(Context.sender))
    }
  }
  





  
  export function getInventory():string[]{
    if(customerInventory.contains(Context.sender)){
    return customerInventory.getSome(Context.sender)
    }
    else{
      return []
    }
  
  }