class Charecter{
   constructor(spwanPosX,spwanPosY){
        this.spwanPosX=spwanPosX;
        this.spwanPosY=spwanPosY;
        this.bool1 = true
        this.bool2 = true
        this.bool3 = true
        this.bool4 = true
        
    }
        
    draw(array){
        
        array.rocks.forEach(element => {
            
            // if(charecter.y-100!=element[1]&&charecter.x !=element[0] ){
            //     this.bool1 = true;
            // }
            if(charecter.y-100===element[1]&&charecter.x ===element[0] ){
                this.bool1 = false;
            }
            // if(charecter.y+100!=element[1]&&charecter.x !=element[0] ){
            //     this.bool2 = true;
            // }
            if(charecter.y+100===element[1]&&charecter.x ===element[0] ){
                this.bool2 = false;
            }
            // if(charecter.x-100!=element[0] &&charecter.y !=element[1]){
            //     this.bool3 = true;
            // }
            if(charecter.x-100===element[0]&&charecter.y ===element[1] ){
                this.bool3 = false;
            }
            //  if(charecter.x+100!=element[0]&&charecter.y !=element[1] ){
            //      this.bool4 = true;
            // }
            if(charecter.x+100===element[0]&&charecter.y ===element[1] ){
                this.bool4 = false;
            }
        });
            
            if(keyWentDown(UP_ARROW )&&this.bool1 ===true){
                charecter.y-=100
                
            }
            if(keyWentDown(DOWN_ARROW)&&this.bool2 ===true ){
                charecter.y+=100
                
            }
            if(keyWentDown(LEFT_ARROW) &&this.bool3 ===true) {
                charecter.x-=100

            }
            if(keyWentDown(RIGHT_ARROW) &&this.bool4 ===true) {
                charecter.x+=100
              
            }
           console.log(this.bool1)
           console.log(this.bool2)
           console.log(this.bool3)
           console.log(this.bool3)
           
           this.bool1 = true
           this.bool2 = true
           this.bool3 = true
           this.bool4 = true
            // this.bool1 = false
            // this.bool2 = false
            // this.bool3 = false
            // this.bool4 = false
            
        }
       
    }

