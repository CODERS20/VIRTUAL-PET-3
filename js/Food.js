class Food{

constructor(){

this.image = loadImage("images/milk.png");
this.room1 = loadImage("images/Bed_Room.png");
this.room2 = loadImage("images/Garden.png");
this.room3 = loadImage("images/Wash_Room.png");
this.room4 = loadImage("images/Living_Room.png");
this.button = createButton('ADD FOOD');
this.button2 = createButton('FEED ROCKIE');

}

hide(){
    this.button.hide();
    this.button2.hide();
}

show(){
    this.button.show();
    this.button2.show();
}


display(){
    var x = 100, y = 500;
    if(foodS !== 0){
      for(var i=0;i<foodS;i++){
          if(i%10 == 0){
              x = 1000;
              y=y+50;
          }
          imageMode(CENTER);
          image(this.image,x,y,50,50);
          x=x+30;
      }
    }

     this.button.position(800,95);
     this.button.mousePressed(()=>{
         foodS = foodS + 1;
          this.updateFoodStock(foodS);
    })

     this.button2.position(900,95);
     this.button2.mousePressed(()=>{
         foodS = foodS - 1;
         dog.addImage(DOGIMG2);
         writeStock(foodS);
         database.ref('/').update({
            feedTime: hour(),
            minuteTime: minute()
          })
         this.updateFoodStock(foodS);
     })

   /*  if(gamestate !== 1){
         this.button.hide();
         this.button2.hide();
    }
     else{
         this.button.hide();
         this.button2.hide();
       }*/


}
  sleepTIME(){
    imageMode(CENTER);
    background(this.room1,750,750);  
  }

  playTIME(){
      imageMode(CENTER);
      background(this.room2,750,750);
  }

  cleanTIME(){
      imageMode(CENTER);
      background(this.room3,750,750);
  }

  tvTIME(){
      imageMode(CENTER);
      background(this.room4,750,750);
  }

updateFoodStock(addFOOD){

database.ref('/').update({
    FOOD : addFOOD
})

}

}