class ball{
  constructor(x,y,w,h,vx,vy)
  drawball (){
  ellipse(x,y,50,50);
  x = x + v;
  y = y + z;
  fill(555,200,400);

  if(y <= 0 || y > 400){
    z= z * -1;
  }

  if (x <= 0 || x > 500) {
    v = v * -1;
  }
  }
}