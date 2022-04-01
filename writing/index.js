(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_1", frames: [[1849,0,150,150],[0,0,737,283],[739,0,737,283],[0,285,737,283],[739,285,737,283],[0,570,737,283],[739,570,737,283],[0,855,953,81],[1849,152,150,115],[1478,0,369,400]]},
		{name:"index_atlas_2", frames: [[0,0,1805,1715],[0,1717,737,283],[739,1717,737,283]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib._6 = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ball10_black = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.點陣圖14 = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.點陣圖15 = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.點陣圖16 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.點陣圖17 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.點陣圖18 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.點陣圖19 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.點陣圖20 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.點陣圖21 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.點陣圖22 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.點陣圖31 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.點陣圖74 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.ResetButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Arrow
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066FF").s().p("AAkCgIAAgjIBQAAIAAhQIAjAAIAABzgAiWCgIAAhzIAjAAIAABQIBQAAIAAAjgAB0gsIAAhQIhQAAIAAgjIBzAAIAABzgAiWgsIAAhzIBzAAIAAAjIhQAAIAABQg");
	this.shape.setTransform(0.025,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0099FF").s().p("AAkCgIAAgjIBQAAIAAhQIAjAAIAABzgAiWCgIAAhzIAjAAIAABQIBQAAIAAAjgAB0gsIAAhQIhQAAIAAgjIBzAAIAABzgAiWgsIAAhzIBzAAIAAAjIhQAAIAABQg");
	this.shape_1.setTransform(0.025,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0066FF").s().p("AAhCQIAAgfIBIAAIAAhJIAfAAIAABogAiHCQIAAhoIAfAAIAABJIBIAAIAAAfgABpgoIAAhIIhIAAIAAgfIBnAAIAABngAiHgoIAAhnIBnAAIAAAfIhIAAIAABIg");
	this.shape_2.setTransform(0.025,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AiWCgIAAk/IEtAAIAAE/g");
	this.shape_3.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.1,-16,30.299999999999997,32);


(lib.PlusButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Icon
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgUBLIAAg2Ig4AAIAAgoIA4AAIAAg3IApAAIAAA3IA4AAIAAAoIg4AAIAAA2g");
	this.shape.setTransform(0,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#80B3FF").s().p("AifC2IAAgkIAKAAIAAAkgAAghfIAAgkIAzAAIAAgyIAlAAIAAAyIAoAAIAAAkIgoAAIglAxg");
	this.shape_1.setTransform(-8.9,10.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[]},1).wait(1));

	// Shape
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0066FF").s().p("AhKCRQhGAAAAhGIAAiVQAAhGBGAAICVAAQBGAAAABGIAACVQAABGhGAAg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00CCFF").s().p("AhDCDQg/gBAAg+IAAiGQAAg/A/AAICGAAQBAAAgBA/IAACGQABA+hAABg");
	this.shape_3.setTransform(0.1,-0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00CCFF").s().p("AhKCRQhGAAAAhGIAAiVQAAhGBGAAICVAAQBGAAAABGIAACVQAABGhGAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_3}]},2).to({state:[{t:this.shape_4}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.9,-14.5,39.4,42.8);


(lib.MinusButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Icon
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhMAUIAAgnICZAAIAAAng");
	this.shape.setTransform(0,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhEASIAAgjICJAAIAAAjg");
	this.shape_1.setTransform(-51.35,1.825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[]},1).wait(1));

	// Shape
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0066FF").s().p("AhKCRQhGAAAAhGIAAiVQAAhGBGAAICVAAQBGAAAABGIAACVQAABGhGAAg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00CCFF").s().p("AhCCDQg/gBAAg+IAAiGQAAg/A/AAICGAAQA+AAABA/IAACGQgBA+g+ABg");
	this.shape_3.setTransform(0.05,0.05);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00CCFF").s().p("AhKCRQhGAAAAhGIAAiVQAAhGBGAAICVAAQBGAAAABGIAACVQAABGhGAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_3}]},2).to({state:[{t:this.shape_4}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58.2,-14.5,72.7,29);


(lib.Map = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Bitmap
	this.instance = new lib._6();
	this.instance.setTransform(-1445,-1366,1.4371,1.3335);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Map, new cjs.Rectangle(-1445,-1366,2594.1,2287), null);


(lib.元件27 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.instance = new lib.ball10_black();
	this.instance.setTransform(0,0,0.1532,0.14);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,23,21);


(lib.元件26 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.instance = new lib.ball10_black();
	this.instance.setTransform(0,0,0.2199,0.2268);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,33,34);


(lib.元件25 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.instance = new lib.ball10_black();
	this.instance.setTransform(0,0,0.2532,0.2599);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,38,39);


(lib.元件23 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.instance = new lib.點陣圖74();
	this.instance.setTransform(74,60,0.2005,0.15,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,74,60);


(lib.元件12 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.instance = new lib.點陣圖31();
	this.instance.setTransform(0,0,0.4167,0.513);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,62.5,59);


(lib.元件8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.instance = new lib.點陣圖21();
	this.instance.setTransform(0,0,0.0841,0.1873);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,62,53);


(lib.元件7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.instance = new lib.點陣圖20();
	this.instance.setTransform(0,0,0.0841,0.1873);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,62,53);


(lib.元件6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.instance = new lib.點陣圖19();
	this.instance.setTransform(0,0,0.0841,0.1873);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,62,53);


(lib.元件5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.instance = new lib.點陣圖18();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,737,283);


(lib.元件4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.instance = new lib.點陣圖17();
	this.instance.setTransform(0,0,0.0841,0.1873);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,62,53);


(lib.元件3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.instance = new lib.點陣圖16();
	this.instance.setTransform(0,0,0.0841,0.1873);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,62,53);


(lib.元件2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.instance = new lib.點陣圖15();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,737,283);


(lib.元件1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.instance = new lib.點陣圖14();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,737,283);


(lib.Board = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.ArrowButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Arrow
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066FF").s().p("AgOBQIiCAAIAAifICCAAIAAhQICfCfIifCgg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0099FF").s().p("AgOBQIiCAAIAAifICCAAIAAhQICfCfIifCgg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00CCFF").s().p("AgNBIIh1AAIAAiPIB1AAIAAhIICQCPIiQCQg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00FFFF").s().p("AgOBQIiCAAIAAifICCAAIAAhQICfCfIifCgg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.5,-16,29,32);


(lib.UI = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Reset_Button
	this.resetButton = new lib.ResetButton();
	this.resetButton.name = "resetButton";
	this.resetButton.setTransform(-25,-79.6,1.6859,1.5938);
	new cjs.ButtonHelper(this.resetButton, 0, 1, 2, false, new lib.ResetButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.resetButton).wait(1));

	// Up_Button
	this.upButton = new lib.ArrowButton();
	this.upButton.name = "upButton";
	this.upButton.setTransform(-20.9,-25.45,1,1,-90);
	new cjs.ButtonHelper(this.upButton, 0, 1, 2, false, new lib.ArrowButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.upButton).wait(1));

	// Left_Button
	this.leftButton = new lib.ArrowButton();
	this.leftButton.name = "leftButton";
	this.leftButton.setTransform(-46.4,0.05,1,1,180);
	new cjs.ButtonHelper(this.leftButton, 0, 1, 2, false, new lib.ArrowButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.leftButton).wait(1));

	// Right_Button
	this.rightButton = new lib.ArrowButton();
	this.rightButton.name = "rightButton";
	this.rightButton.setTransform(3.8,-0.8);
	new cjs.ButtonHelper(this.rightButton, 0, 1, 2, false, new lib.ArrowButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.rightButton).wait(1));

	// Down_Button
	this.downButton = new lib.ArrowButton();
	this.downButton.name = "downButton";
	this.downButton.setTransform(-20.9,25.55,1,1,90);
	new cjs.ButtonHelper(this.downButton, 0, 1, 2, false, new lib.ArrowButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.downButton).wait(1));

	// Plus_Button
	this.plusButton = new lib.PlusButton();
	this.plusButton.name = "plusButton";
	this.plusButton.setTransform(-26,-208.8,1.7585,1.7578,0,0,0,-0.3,-1.4);
	new cjs.ButtonHelper(this.plusButton, 0, 1, 2, false, new lib.PlusButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.plusButton).wait(1));

	// Minus_Button
	this.minusButton = new lib.MinusButton();
	this.minusButton.name = "minusButton";
	this.minusButton.setTransform(-25.65,-146.65,1.7586,1.7599,0,0,0,0,-0.7);
	new cjs.ButtonHelper(this.minusButton, 0, 1, 2, false, new lib.MinusButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.minusButton).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.UI, new cjs.Rectangle(-128.1,-231.8,146.4,271.90000000000003), null);


(lib.PaintingApp = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		createjs.Touch.enable(stage);
		var app = this;
		
		app.config = 
		{
			color:"#000000",
			size: 10,	
			shape:"round"
		};
		
		app.shape = null;
		app.oldX = null,
		app.oldY = null,
		app.pressed = false;
		app.erase = false;
		
		app.start = function()
		{
			createjs.Touch.enable(stage);
			stage.enableDOMEvents(true);
			app.reset();
			
			app.on("mousedown", function(e)
			{
				target = e.target;		
				
				if (target == app.redButton)
				{
					app.config.color = "#FF0000";
					app.erase = false;
					app.colorHighlight.x = target.x
				}			
				else if (target == app.greenButton)
				{
					app.config.color = "#00FF00";
					app.erase = false;
					app.colorHighlight.x = target.x
				}			
				else if (target == app.blue0Button)
				{
					app.config.color = "#00bdeb";
					app.erase = false;
					app.colorHighlight.x = target.x
				}
				else if (target == app.blueButton)
				{
					app.config.color = "#006deb";
					app.erase = false;
					app.colorHighlight.x = target.x
				}
				else if (target == app.orangeButton)
				{
					app.config.color = "#FFA500";
					app.erase = false;
					app.colorHighlight.x = target.x
				}
				else if (target == app.yellowButton)
				{
					app.config.color = "#ffff00";
					app.erase = false;
					app.colorHighlight.x = target.x
				}	
				else if (target == app.blue0Button)
				{
					app.config.color = "#00FFFF";
					app.erase = false;
					app.colorHighlight.x = target.x
				}	
				else if (target == app.purpleButton)
				{
					app.config.color = "#8B00FF";
					app.erase = false;
					app.colorHighlight.x = target.x
				}	
				else if (target == app.brownButton)
				{
					app.config.color = "#8B0000";
					app.erase = false;
					app.colorHighlight.x = target.x
				}	
				else if (target == app.greyButton)
				{
					app.config.color = "#C0C0C0";
					app.erase = false;
					app.colorHighlight.x = target.x
				}	
				else if (target == app.blackButton)
				{
					app.config.color = "#000000";
					app.erase = false;
					app.colorHighlight.x = target.x
				}	
				else if (target == app.eraseButton)
				{
					app.erase = true;
					app.colorHighlight.x = target.x
				}			
				else if (target == app.size1Button)
				{
					app.config.size = 3;
					app.sizeHighlight.x = target.x;
				}			
				else if (target == app.size3Button)
				{
					app.config.size = 5;
					app.sizeHighlight.x = target.x;
				}			
				else if (target == app.size6Button)
				{
					app.config.size = 10;
					app.sizeHighlight.x = target.x;
				}			
				else if (target == app.buttButton)
				{
					app.config.shape = "butt";
					app.shapeHighlight.x = target.x;
				}			
				else if (target == app.squareButton)
				{
					app.config.shape = "square";
					app.shapeHighlight.x = target.x;
				}			
				else if (target == app.roundButton)
				{
					app.config.shape = "round";
					app.shapeHighlight.x = target.x;
				}
				else if (target == app.resetButton)
				{
					app.reset();
				}
				
			});
		
			stage.on("stagemousedown", function(e)
			{
				app.oldX = e.stageX / stage.scaleX;
				app.oldY = e.stageY / stage.scaleY;
				
				app.pressed = true;		
			});
		
			stage.on("stagemouseup", function(e)
			{
				app.pressed = false;
			});
		
			stage.on("stagemousemove", function(e)
			{
				var responsiveX = e.stageX / stage.scaleX;
				var responsiveY = e.stageY / stage.scaleY;
				
				if (app.pressed && app.oldX)
					app.shape.graphics.beginStroke(app.config.color).setStrokeStyle(app.config.size, app.config.shape).moveTo(app.oldX, app.oldY).lineTo(responsiveX, responsiveY);
				
				app.oldX = responsiveX;
				app.oldY = responsiveY;
				
				app.board.updateCache(app.erase ? "destination-out" : "source-over");
				app.shape.graphics.clear();
			});
		};
		
		app.reset = function()
		{
			if (app.board.children.length > 0)
				app.board.removeChildAt(0);
			
			app.board.cache(0, 0, app.nominalBounds.width, app.nominalBounds.height);
			app.shape = new createjs.Shape();
			app.board.addChild(app.shape);
		};
		
		app.start();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// JS
	this.eraseButton = new lib.元件23();
	this.eraseButton.name = "eraseButton";
	this.eraseButton.setTransform(769.55,684,0.6757,0.6944,0,0,0,37.1,30.1);
	new cjs.ButtonHelper(this.eraseButton, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.eraseButton).wait(1));

	// Board
	this.board = new lib.Board();
	this.board.name = "board";

	this.timeline.addTween(cjs.Tween.get(this.board).wait(1));

	// Background
	this.redButton = new lib.元件8();
	this.redButton.name = "redButton";
	this.redButton.setTransform(44.65,680.95,1,1,0,0,0,31,26.5);
	new cjs.ButtonHelper(this.redButton, 0, 1, 1);

	this.orangeButton = new lib.元件7();
	this.orangeButton.name = "orangeButton";
	this.orangeButton.setTransform(116.65,680.95,1,1,0,0,0,31,26.5);
	new cjs.ButtonHelper(this.orangeButton, 0, 1, 1);

	this.yellowButton = new lib.元件6();
	this.yellowButton.name = "yellowButton";
	this.yellowButton.setTransform(190.15,680.95,1,1,0,0,0,31,26.5);
	new cjs.ButtonHelper(this.yellowButton, 0, 1, 1);

	this.greenButton = new lib.元件5();
	this.greenButton.name = "greenButton";
	this.greenButton.setTransform(262.25,795.95,0.0841,0.1873,0,0,0,368.5,755.6);
	new cjs.ButtonHelper(this.greenButton, 0, 1, 1);

	this.blueButton = new lib.元件4();
	this.blueButton.name = "blueButton";
	this.blueButton.setTransform(335.05,680.95,1,1,0,0,0,31,26.5);
	new cjs.ButtonHelper(this.blueButton, 0, 1, 1);

	this.purpleButton = new lib.元件3();
	this.purpleButton.name = "purpleButton";
	this.purpleButton.setTransform(407.95,679.6,1,1,0,0,0,31,26.5);
	new cjs.ButtonHelper(this.purpleButton, 0, 1, 1);

	this.brownButton = new lib.元件2();
	this.brownButton.name = "brownButton";
	this.brownButton.setTransform(482.6,795.95,0.0841,0.1731,0,0,0,368.5,817.2);
	new cjs.ButtonHelper(this.brownButton, 0, 1, 1);

	this.blackButton = new lib.元件1();
	this.blackButton.name = "blackButton";
	this.blackButton.setTransform(556.25,677.6,0.0841,0.1731,0,0,0,368.6,141.5);
	new cjs.ButtonHelper(this.blackButton, 0, 1, 1);

	this.size1Button = new lib.元件27();
	this.size1Button.name = "size1Button";
	this.size1Button.setTransform(721.75,691.6,1,1,0,0,0,11.5,10.5);
	new cjs.ButtonHelper(this.size1Button, 0, 1, 1);

	this.size3Button = new lib.元件26();
	this.size3Button.name = "size3Button";
	this.size3Button.setTransform(676.4,685.1,1,1,0,0,0,16.5,17);
	new cjs.ButtonHelper(this.size3Button, 0, 1, 1);

	this.size6Button = new lib.元件25();
	this.size6Button.name = "size6Button";
	this.size6Button.setTransform(629.55,682.6,1,1,0,0,0,19,19.5);
	new cjs.ButtonHelper(this.size6Button, 0, 1, 1);

	this.resetButton = new lib.元件12();
	this.resetButton.name = "resetButton";
	this.resetButton.setTransform(817.35,657.55,1,0.8474,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.resetButton, 0, 1, 1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s().p("EhK/A4VMAAAhwpMCV/AAAMAAABwpg");
	this.shape.setTransform(523.4,452.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.resetButton},{t:this.size6Button},{t:this.size3Button},{t:this.size1Button},{t:this.blackButton},{t:this.brownButton},{t:this.purpleButton},{t:this.blueButton},{t:this.greenButton},{t:this.yellowButton},{t:this.orangeButton},{t:this.redButton}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.PaintingApp, new cjs.Rectangle(13.7,92.4,989.6999999999999,721), null);


(lib.App = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// UI
	this.ui = new lib.UI();
	this.ui.name = "ui";
	this.ui.setTransform(984.9,643);

	this.timeline.addTween(cjs.Tween.get(this.ui).wait(1));

	// 畫畫
	this.instance = new lib.點陣圖22();
	this.instance.setTransform(686,711,0.3504,0.4568);

	this.instance_1 = new lib.PaintingApp();
	this.instance_1.setTransform(0,0,1.0122,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// writing
	this.map = new lib.Map();
	this.map.name = "map";
	this.map.setTransform(512,389.75,0.2615,0.2785,0,0,0,2.9,2.7);

	this.timeline.addTween(cjs.Tween.get(this.map).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.App, new cjs.Rectangle(0,0,1020,813.4), null);


// stage content:
(lib.writing5_zoom = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var tl = this;
		
		tl.map =
		{
		    friction: 0.85,
		    boundsFriction: 0.85,
		    nudge: 5,
		    zoomStep: 0.01,
		    minScale: 0.1,
		    maxScale: 1,
		    checkBounds: true,
		    checkBoundsWhenDragging: false,
		    checkBoundsWhenPressing: false,
		    sprite: tl.app.map,
		    isDragging: false,
		    clickedX: 0,
		    clickedY: 0,
		    speedX: 0,
		    speedY: 0,
		    originalX: tl.app.map.x,
		    originalY: tl.app.map.y,
		    originalScaleX: tl.app.map.scaleX,
		    originalScaleY: tl.app.map.scaleY
		};
		
		tl.ui =
		{
		    resetButton: tl.app.ui.resetButton,
		    plusButton: tl.app.ui.plusButton,
		    minusButton: tl.app.ui.minusButton,
		    upButton: tl.app.ui.upButton,
		    rightButton: tl.app.ui.rightButton,
		    downButton: tl.app.ui.downButton,
		    leftButton: tl.app.ui.leftButton,
		    plusButtonDown: false,
		    minusButtonDown: false,
		    upButtonDown: false,
		    rightButtonDown: false,
		    downButtonDown: false,
		    leftButtonDown: false
		};
		
		tl.start = function(e)
		{
			stage.enableMouseOver();
			stage.mouseMoveOutside = true;
			createjs.Touch.enable(stage);
			createjs.Ticker.timingMode = createjs.Ticker.RAF;
		    createjs.Ticker.on("tick", tl.update);
		    tl.map.sprite.on("mousedown", tl.mouseDown);
		    tl.ui.resetButton.on("mousedown", tl.resetMap);
		    tl.ui.plusButton.on("mousedown", tl.zoomMap);
		    tl.ui.minusButton.on("mousedown", tl.zoomMap);
		    tl.ui.upButton.on("mousedown", tl.moveMap);
		    tl.ui.rightButton.on("mousedown", tl.moveMap);
		    tl.ui.downButton.on("mousedown", tl.moveMap);
		    tl.ui.leftButton.on("mousedown", tl.moveMap);
		    stage.on("stagemouseup", tl.stageMouseUp);
		    document.getElementById('canvas').addEventListener('mousewheel', tl.onMouseWheel);
		    document.getElementById('canvas').addEventListener('DOMMouseScroll', tl.onMouseWheel);
		
		    tl.resetMap();
		};
		
		tl.mouseDown = function(e)
		{
		    tl.map.clickedX = stage.mouseX;
		    tl.map.clickedY = stage.mouseY;
		
		};
		
		tl.stageMouseUp = function() {
		    tl.map.isDragging = false;
		    tl.ui.plusButtonDown = false;
		    tl.ui.minusButtonDown = false;
		    tl.ui.upButtonDown = false;
		    tl.ui.rightButtonDown = false;
		    tl.ui.downButtonDown = false;
		    tl.ui.leftButtonDown = false;
		};
		
		tl.update = function(e)
		{
		    var usingButton = tl.ui.plusButtonDown || tl.ui.minusButtonDown || tl.ui.upButtonDown || tl.ui.rightButtonDown || tl.ui.downButtonDown || tl.ui.leftButtonDown;
		
		    if (tl.ui.plusButtonDown)
		        tl.scaleMap(-tl.map.zoomStep);
		    else if (tl.ui.minusButtonDown)
		        tl.scaleMap(tl.map.zoomStep);
		
		    if (tl.ui.upButtonDown)
		        tl.map.speedY -= tl.map.nudge;
		    else if (tl.ui.rightButtonDown)
		        tl.map.speedX += tl.map.nudge;
		    else if (tl.ui.downButtonDown)
		        tl.map.speedY += tl.map.nudge;
		    else if (tl.ui.leftButtonDown)
		        tl.map.speedX -= tl.map.nudge;
		
		    if (tl.map.isDragging)
			{
		        tl.map.speedX = stage.mouseX - tl.map.clickedX;
		        tl.map.speedY = stage.mouseY - tl.map.clickedY;
		    }
		
		    tl.map.speedX *= tl.map.friction;
		    tl.map.speedY *= tl.map.friction;
		    tl.map.sprite.x += tl.map.speedX;
		    tl.map.sprite.y += tl.map.speedY;
		    tl.map.clickedX = stage.mouseX;
		    tl.map.clickedY = stage.mouseY;
		
		    if (!tl.map.checkBounds)
		        return;
		
		    if (tl.map.isDragging && !tl.map.checkBoundsWhenDragging)
		        return;
		
		    if (usingButton && !tl.map.checkBoundsWhenPressing)
		        return;
		
		    var bounds = tl.map.sprite.nominalBounds;
		    var w = bounds.width * tl.map.sprite.scaleX;
		    var h = bounds.height * tl.map.sprite.scaleY;
		    var left = tl.map.sprite.x - w * 0.5;
		    var right = tl.map.sprite.x + w * 0.5;
		    var top = tl.map.sprite.y - h * 0.5;
		    var bottom = tl.map.sprite.y + h * 0.5;
		    var canvasWidth = canvas.width / stage.scaleX;
		    var canvasHeight = canvas.height / stage.scaleY;
			
			 if (tl.map.isDragging)
				 return;
		
		    if (w >= canvasWidth)
			{
		        if (left > 0)
		            tl.map.sprite.x = tl.lerp(tl.map.sprite.x, w * 0.5, tl.map.boundsFriction);
		        else if (right < canvasWidth)
		            tl.map.sprite.x = tl.lerp(tl.map.sprite.x, canvasWidth - w * 0.5, tl.map.boundsFriction);
		    }
			else
		        tl.map.sprite.x = tl.lerp(tl.map.sprite.x, tl.map.originalX, tl.map.boundsFriction);
		
		    if (h >= canvasHeight)
			{
		        if (top > 0)
		            tl.map.sprite.y = tl.lerp(tl.map.sprite.y, h * 0.5, tl.map.boundsFriction);
		        else if (bottom < canvasHeight)
		            tl.map.sprite.y = tl.lerp(tl.map.sprite.y, canvasHeight - h * 0.5, tl.map.boundsFriction);
		    }
			else
		        tl.map.sprite.y = tl.lerp(tl.map.sprite.y, tl.map.originalY, tl.map.boundsFriction);
		};
		
		tl.onMouseWheel = function(e)
		{
		    var delta;
		
		    if (e == window.event)
		        delta = -10 / window.event.wheelDeltaY;
		    else
		        delta = e.detail / 30;
		
		    var zoomFactor = delta;
		    tl.scaleMap(zoomFactor);
		};
		
		tl.resetMap = function()
		{
		    tl.map.sprite.x = tl.map.originalX;
		    tl.map.sprite.y = tl.map.originalY;
		    tl.map.sprite.scaleX = tl.map.sprite.scaleY = tl.map.originalScaleX;
		}
		
		tl.zoomMap = function(e)
		{
		    if (e.currentTarget == tl.ui.plusButton)
		        tl.ui.plusButtonDown = true;
		    if (e.currentTarget == tl.ui.minusButton)
		        tl.ui.minusButtonDown = true;
		};
		
		tl.moveMap = function(e)
		{
		    if (e.currentTarget == tl.ui.upButton)
		        tl.ui.upButtonDown = true;
		    else if (e.currentTarget == tl.ui.rightButton)
		        tl.ui.rightButtonDown = true;
		    else if (e.currentTarget == tl.ui.downButton)
		        tl.ui.downButtonDown = true;
		    else if (e.currentTarget == tl.ui.leftButton)
		        tl.ui.leftButtonDown = true;
		};
		
		tl.scaleMap = function(amount)
		{
		    tl.map.sprite.scaleX -= amount;
		    tl.map.sprite.scaleY = tl.map.sprite.scaleX;
		
		    if (tl.map.sprite.scaleX < tl.map.minScale)
		        tl.map.sprite.scaleX = tl.map.sprite.scaleY = tl.map.minScale;
		    else if (tl.map.sprite.scaleX > tl.map.maxScale)
		        tl.map.sprite.scaleX = tl.map.sprite.scaleY = tl.map.maxScale;
		};
		
		tl.lerp = function(v1, v2, friction)
		{
		    return friction * v1 + (1 - friction) * v2;
		}
		
		stage.on("drawstart", tl.start, null, true);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// App
	this.app = new lib.App();
	this.app.name = "app";
	this.app.setTransform(0,0.25);

	this.timeline.addTween(cjs.Tween.get(this.app).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(505.5,384.3,514.5,429.40000000000003);
// library properties:
lib.properties = {
	id: '7082F410708BA64D9CF88EA8C008210D',
	width: 1011,
	height: 768,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/index_atlas_1.png", id:"index_atlas_1"},
		{src:"images/index_atlas_2.png", id:"index_atlas_2"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['7082F410708BA64D9CF88EA8C008210D'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;