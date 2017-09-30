var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var objects;
(function (objects) {
    var Plane = /** @class */ (function (_super) {
        __extends(Plane, _super);
        //public proerties
        //constructors
        function Plane(assetManager) {
            var _this = _super.call(this, assetManager.getResult("plane")) || this;
            _this.start();
            return _this;
        }
        //private methods
        Plane.prototype._checkBounds = function () {
            if (this.x >= 640 - this.half_width) {
                this.x = 640 - this.half_width;
            }
            if (this.x <= 640 - this.half_height) {
                this.x = 640 - this.half_height;
            }
        };
        //public methods
        Plane.prototype.start = function () {
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.half_width = this.width * 0.5;
            this.half_height = this.height * 0.5;
            this.regX = this.half_width;
            this.regY = this.half_height;
            this.x = 320;
            this.y = 430;
        };
        Plane.prototype.update = function () {
            this.x = this.stage.mouseX;
            this._checkBounds();
        };
        return Plane;
    }(createjs.Bitmap));
    objects.Plane = Plane;
})(objects || (objects = {}));
//# sourceMappingURL=plane.js.map