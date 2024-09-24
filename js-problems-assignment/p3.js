
function checkDigitsInName(name) {

    s= name 
    if(typeof s == 'string'){
        k = s.split('')
        for(i=0;i<=k.length-1;i++)
        {
            let m = k[i];
            if(m>= '0' && m<= '9'){
            
                return 'true';
            
            } 
            
        }    
            return 'false';
            
            
           
        
        }
        
    
    else
    {
        return 'Invalid Input'
    }

}

