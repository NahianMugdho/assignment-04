function sendNotification(email) {
    s = email
    k = s.split('@');

    if(k.length==2)
    {
    
        z = k[0]+' sent you an email from '+k[1]
        return z
    
    }
    else
    {
    
        return 'Invalid Email'
    
    }    

    }

