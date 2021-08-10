class opLauncher {
    constructor(l1,l2){
    var op={
      bodyA:l1,
      pointB:l2,
      length:30,
      stiffness:0.3
    }
this.body= Matter.Constraint.create(op)
World.add(world,this.body)
this.point=l2
    }
display(){

if(this.body.bodyA){
    line(this.body.bodyA.position.x,this.body.bodyA.position.y,this.point.x,this.point.y)

}


}
fly(){
    this.body.bodyA=null
}



}