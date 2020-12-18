class Npc {
    constructor(spwanPosX, spwanPosY) {
        this.spwanPosX = spwanPosX;
        this.spwanPosY = spwanPosY;
        this.bool1 = true
        this.bool2 = true
        this.bool3 = true
        this.bool4 = true
        this.dirA = [0,0,0,0];
        this.dir = 0;
        this.i = 0
    }

    draw(array) {

        
        
        if (this.i === 5) {
            this.dir = 0
            //console.log(this.dirA,this.i)
            array.rocks.forEach(element => {
                
               
                if( npc.y-100 != element[1]&& npc.x !=element[0]){
                    this.dirA[0]=1
                }
                
                if( npc.y+100 != element[1]&& npc.x !=element[0]){
                this.dirA[1]=2
                }
                if( npc.x-100 != element[0]&& npc.y !=element[1]){
                    this.dirA[2]=3

                }
               
                if( npc.x+100 != element[0]&& npc.y !=element[1]){
                this.dirA[3]=4
                } 
                
            })
       
            //console.log(this.dirA,this.i)
            while (this.dir === 0){
                this.dir = random(this.dirA)
            }
            if (this.dir === 1) {
                npc.y -= 100

                //console.log(this.dir)

            }
            else if (this.dir === 2) {
                npc.y += 100
                //console.log(this.dir + 'dir');
            }
            else if (this.dir === 3) {
                npc.x -= 100
                //console.log(this.dir + 'dir');
            }
            else if (this.dir === 4) {
                npc.x += 100
                //console.log(this.dir + 'dir');
            }
            this.dirA = [0,0,0,0]
            

            this.i = 0
        }
            this.i++
        
    }
} 