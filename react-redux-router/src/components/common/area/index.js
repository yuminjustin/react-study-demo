import areas from './data';

const {alist,plist,clist,xlist} = areas.data;
const splitArea = (arr, fn) => {
   return arr.map((item)=>{
      
      let re = {
         value: String(item.id),
         label: item.name
      }

      if(fn) Object.assign(re,{children:fn(item.id)})
      
      return re
   })
}
const options = alist.map((item) => {

    let children =  splitArea (plist[item.id] || [],(id)=>{
        return splitArea (clist[id] || [],(id2)=>{
             return splitArea(xlist[id2] || [])
        })
    })
    
    return {
        value: String(item.id),
        label: item.name,
        children: children
    }
})

export default options;
