module objects{

    export class Ocean extends createjs.Bitmap{


        private _verticalSpeed: number;
        constructor(assetManager:createjs.LoadQueue){
            super(assetManager.getResult("ocean"));

            this.Start();
        }

        private _reset():void{
            this.y = -960;
        }

        private _checkBounds():void{
            if(this.y >= 0)
            { 
                this._reset();

            }
        }
        public Start():void{
        this._verticalSpeed = 5;
        this._reset();
        }

        public Update():void{
            this.y += this._verticalSpeed;
            this._checkBounds();
        }
    }
}