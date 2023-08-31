 function numberToWord (num){
    if (num < 0){
        return "too small"
    }else if(num >9){
        return "too large"
    } else {
        const words =["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine",]
        return words[num]
    }
 }
 console.log (numberToWord(8));



 