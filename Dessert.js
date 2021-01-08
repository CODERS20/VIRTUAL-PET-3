class Dessert{

    constructor(){
    
    this.image = loadImage("images/FoodSTOCKS.png");
    this.button3 = createButton('ADD SPECIAL FOOD');
    this.button4 = createButton('FEED SPECIAL FOOD TO ROCKIE');
    
    }

    hide(){
        this.button3.hide();
        this.button4.hide();
    }
    
    show(){
        this.button3.show();
        this.button4.show();
    }
    
    
    display(){
        var x = 100, y = 1000;
        if(food2Stock !== 0){
          for(var i=0;i<food2Stock;i++){
              if(i%10 == 0){
                  x = 1000;
                  y=y+90;
              }
              imageMode(CENTER);
              image(this.image,x,y,60,60);
              x=x+50;
          }
        }
    
        this.button3.position(800,125);
        this.button3.mousePressed(()=>{
            food2Stock = food2Stock + 1;
            this.updateSPECIALFoodStock(food2Stock);
        })
    
        this.button4.position(900,125);
        this.button4.mousePressed(()=>{
            food2Stock = food2Stock - 1;
            dog.addImage(DOGIMG2);
            writeSPECIAL(food2Stock);
            this.updateSPECIALFoodStock(food2Stock);
        })
    
       /* if(gamestate !== 1){
            this.button3.hide();
            this.button4.hide();
       }
        else{
            this.button3.hide();
            this.button4.hide();
          }*/
    
    }
 
    updateSPECIALFoodStock(foodbowl){
    
    database.ref('/').update({
        SPECIAL_FOOD : foodbowl
    })
    
    }
    
    }