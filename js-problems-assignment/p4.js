function calculateFinalScore(obj) {
    if(typeof obj == 'object'){
    
        if(typeof obj.name == 'string' && typeof obj.testScore == 'number' && typeof obj.schoolGrade ==  'number' && typeof obj.isFFamily == 'boolean' ){

            x = obj.testScore
            y = obj.schoolGrade
            
            if(obj.isFFamily == true)
            {
                z = 20
            
            }
            else{
                z=0
            
            }
            total = x+y+z
            if (total>= 80){
            
            return true
            
            
            }

            else{
            
                return false
            
            }
        
        }
        else{
        
            return "Invalid Input"
        
        
        }
        
      
    
    }
    else{
    
       return 'Invalid Input' 
    
    }

    }

