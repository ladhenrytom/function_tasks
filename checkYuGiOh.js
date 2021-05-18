function checkYuGiOh(n){
    let array = []
    if (Number(n) == n && !Array.isArray(n) && n != "" && n != 0) {
        for (i=1; i<=n; i++) {
            var x =""
            if (i % 2 == 0 && i % 3 != 0 && i % 5 != 0){
                x += "yu"
                array.push(x)
            }
            if (i % 3 == 0 && i % 2 != 0 && i % 5 != 0){
                x += "gi"
                array.push(x)
            }
            if (i % 5 == 0 && i % 2 != 0 && i % 3 != 0){
                x += "oh"
                array.push(x)
            }
            if (i % 2 == 0 && i % 3 ==0 && i % 5 != 0){
                x += "yu-gi"
                array.push(x)
            }
            if (i % 2 == 0 && i % 5 ==0 && i % 3 != 0){
                x += "yu-oh"
                array.push(x)
            }
            if (i % 2 != 0 && i % 5 ==0 && i % 3 == 0){
                x += "gi-oh"
                array.push(x)
            }
            if (i % 2 == 0 && i % 5 ==0 && i % 3 == 0){
                x += "yu-gi-oh"
                array.push(x)
            }
            if(i % 2 !=0 && i % 3 !=0 && i % 5 !=0)
            array.push(i)
            
        }
        return array    
    }
    else {
        return "invalid parameter: " + JSON.stringify(n)
    }
      
}
console.log(checkYuGiOh())
