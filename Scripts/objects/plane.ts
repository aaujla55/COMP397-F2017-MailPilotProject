module objects{
    export class Plane extends createjs.Bitmap{
        //private instance variables
        width:number;
        height:number;
        half_width: number;
        half_height:number;
        //public proerties

        //constructors
        constructor(assetManager:createjs.LoadQueue){
            super(assetManager.getResult("plane"));
            this.start();
        }
        //private methods
        private _checkBounds(){
            if(this.x>= 640- this.half_width)
            {
                this.x = 640- this.half_width;
            }
            if(this.x<= 640- this.half_height)
            {
                this.x = 640- this.half_height;
            }
        }
        //public methods
        public start(){
            this.width = this.getBounds().width;
            this.height= this.getBounds().height;
            this.half_width = this.width * 0.5;
            this.half_height = this.height * 0.5;
            this.regX =  this.half_width;
            this.regY = this.half_height;
            this.x = 320;
            this.y = 430;
        }

        public update(){
            this.x = this.stage.mouseX;
            this._checkBounds();
        }

        
    }
}