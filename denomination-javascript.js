var notes = [2000,500,200,100,50,20,10,5,2,1];

function noteCollection(amount){
    var Totalamount = amount;
  for(var i = 0; i < notes.length;i++){
    var notes1 = Math.floor(Totalamount / notes[i])
    console.log(notes[i] + " = " + notes1);
    Totalamount = Totalamount % notes[i]
    
  }
}

noteCollection(100);