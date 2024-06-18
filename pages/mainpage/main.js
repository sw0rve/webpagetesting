(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


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


(lib.mainbutton_style = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(2,1,1).p("AuDkNIcHAAIAAIbI8HAAg");
	this.shape.setTransform(90,27);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.498)").s().p("AuDEOIAAobIcHAAIAAIbg");
	this.shape_1.setTransform(90,27);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mainbutton_style, new cjs.Rectangle(-1,-1,182,56), null);


(lib.main_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// MergedLayer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(2,1,1).p("Eg+fgpZMB8/AAAMAAABSzMh8/AAAg");
	this.shape.setTransform(399.975,265);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.498)").s().p("Eg+fApaMAAAhSzMB8/AAAMAAABSzg");
	this.shape_1.setTransform(399.975,265);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.main_1, new cjs.Rectangle(-1,-1,802,532), null);


(lib.logo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.2)").s().p("AgoCDQATgKALgRQALgSAGgaQAFgbABgdQAAgegGgaQgDgUgFgMQgFgMgJgLQgJgMgQgKIAAgGQAXALAPAPQATAVAMAdQALAdAAAeQAAAtgVAmQgWAlglAQg");
	this.shape.setTransform(459.1,124.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.2)").s().p("AAYBqIAAgTQgKAKgJAFQgJAEgLAAQgVAAgRgSQgQgSAAgdQAAgdASgXQASgYAdAAQAQAAAMALIAAgZQAAgXgBgFQgBgFgDgCQgCgCgDAAIgLACIgCgFIAogQIAHAAIAACaQAAAYABAFQABAFADACQACACADAAQAEAAAHgCIABAFIgnAQgAgdgOQgNAOAAAdQAAAeAMAQQANAPAQAAQAMAAANgNIAAhFQgBgJgEgIQgFgJgHgEQgHgEgGAAQgNAAgKAMg");
	this.shape_1.setTransform(447.425,121.075);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.2)").s().p("AgmA1QgSgTAAggQAAgiASgTQASgTAZAAQAXAAAOAPQAPAPAAAZIhcAAQAAAcAPARQAOARATAAQANAAAKgHQAKgHAGgSIAFADQgDAUgPARQgPAQgWAAQgXAAgRgSgAgYgyQgJAJgCARIA9AAQAAgNgDgFQgDgIgIgFQgHgFgHAAQgMAAgKAKg");
	this.shape_2.setTransform(432.875,124.575);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.2)").s().p("AAHBoIAAgFIAEAAQAIAAAEgDQAEgDACgFIAAgOIAAgwQAAgWgCgFQgDgHgEgEQgGgDgHAAQgHAAgGAEQgJADgKALIAABHQAAAOACADQABADAEADQAEACAKAAIAAAFIhCAAIAAgFQAJAAAFgDQADgBACgEQABgEAAgNIAAh5QAAgXAAgFQgCgFgCgCQgCgCgEAAIgKACIgCgFIAogQIAHAAIAABiQAQgSAJgFQAJgFAKAAQALAAAIAGQAJAHADANQADAJAAAYIAAAwQAAANACAEQACAEADACQAEACAJAAIAAAFg");
	this.shape_3.setTransform(418.6,120.875);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.2)").s().p("AgaBCIgIgBQgDAAgCAEIgFAAIAAgwIAFAAQAEAUALALQAMALANAAQALAAAGgHQAGgFAAgJQAAgKgHgGQgHgIgUgKQgVgJgHgJQgHgIAAgOQAAgQAMgLQALgLASAAQAHAAALADIAKADIAEgBIADgFIAFAAIAAAtIgFAAQgGgVgIgHQgJgJgMAAQgLABgGAFQgGAGAAAGQAAAIAEAGQAFAGAOAHIAUAKQAeAOAAAXQAAATgOALQgOALgRAAQgLAAgQgFg");
	this.shape_4.setTransform(405.475,124.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.2)").s().p("AgeBoIAAgFQAJAAADgCQAEgCACgEQACgFAAgMIAAg0QAAgWgBgFQgBgFgCgBQgDgCgDAAQgFAAgFACIgCgFIAmgRIAHAAIAABrQAAANACAEQACAEAEACQADACAJAAIAAAFgAgJhOQgEgEAAgGQAAgGAEgFQAEgEAGAAQAGAAAFAEQAEAFAAAGQAAAGgEAEQgFAFgGAAQgFAAgFgFg");
	this.shape_5.setTransform(395.35,120.875);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.2)").s().p("AAHBFIAAgFIADAAQAJgBAEgCQAEgDABgFIABgPIAAg1QAAgSgFgJQgFgIgLAAQgQAAgSATIAABFQAAAPACADQACAEAEACQADABALABIAAAFIhCAAIAAgFIADAAQAKAAAEgGQADgEAAgQIAAgwQAAgYgBgGQgBgFgCgCQgDgCgDAAQgFAAgFACIgCgEIAogRIAGAAIAAAcQAYgcAUAAQALAAAIAGQAIAFAFANQADAIAAATIAAA3QAAAOACAEQACADADADQAEACAJAAIAAAFg");
	this.shape_6.setTransform(383.625,124.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.2)").s().p("AgfBoIAAgFQAKAAAEgCQADgCACgEQACgFAAgMIAAg0QAAgWgCgFQgBgFgCgBQgCgCgEAAQgEAAgGACIgCgFIAogRIAGAAIAABrQAAANACAEQACAEADACQAEACAKAAIAAAFgAgIhOQgFgEAAgGQAAgGAFgFQAEgEAFAAQAGAAAEAEQAFAFAAAGQAAAGgFAEQgEAFgGAAQgFAAgEgFg");
	this.shape_7.setTransform(372,120.875);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.2)").s().p("Ag5BoIAAgFIAGAAQAGgBAEgCQAFgDACgFQACgFAAgPIAAhWIgaAAIAAgLIAaAAIAAgJQgBgUAHgOQAGgOAOgJQAMgIARAAQAPAAANAKQAIAGAAAIQAAAFgDAEQgEAEgEAAQgEAAgDgDQgEgCgGgIQgFgIgFgCQgEgDgGgBQgGAAgFAEQgEAEgCAHQgCAIAAAfIAAAKIAhAAIAAALIghAAIAABWQAAAUAEAEQAFAHAIAAIANAAIAAAFg");
	this.shape_8.setTransform(364.85,120.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.2)").s().p("AAHBFIAAgFIADAAQAJgBAEgCQAEgDABgFIABgPIAAg1QAAgSgFgJQgFgIgLAAQgQAAgSATIAABFQAAAPACADQACAEAEACQADABALABIAAAFIhCAAIAAgFIADAAQAKAAAEgGQADgEAAgQIAAgwQAAgYgBgGQgBgFgCgCQgDgCgDAAQgFAAgFACIgCgEIAogRIAGAAIAAAcQAYgcAUAAQALAAAIAGQAIAFAFANQADAIAAATIAAA3QAAAOACAEQACADADADQAEACAJAAIAAAFg");
	this.shape_9.setTransform(350.275,124.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,255,255,0.2)").s().p("AAcBFIAAgcQgSASgIAFQgJAFgJAAQgMAAgIgHQgJgGgDgKQgDgLAAgSIAAg7QAAgKgCgDQgCgEgEgCQgEgCgLAAIAAgFIAvAAIAABYQAAATAHAGQAGAGAKAAQAFAAAIgEQAIgEALgLIAAhLQAAgMgFgDQgDgFgOAAIAAgFIAuAAIAABQQAAAXABAGQABAFADACQACACADAAQAFAAAGgDIACAGIgpAQg");
	this.shape_10.setTransform(335.25,124.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,255,255,0.2)").s().p("Ag8BfQgFgFgBgHQAAgGAFgEQADgEAIAAQAEAAAJAEIAHACQAEAAAGgFQAFgEAFgNIAKgYIgxhkIgHgLQgDgFgCgCQgEgCgHgCIAAgFIA+AAIAAAFIgDAAQgGAAgDADQgEADAAAEQAAAGAFAKIAgBDIAdhKQADgGAAgGIgBgDQAAgBgBAAQAAgBAAAAQgBAAAAAAQgBgBAAAAQgDgBgGAAIAAgFIArAAIAAAFIgIACIgGAHIgGALIg1CFQgIAUgNAKQgMAJgNAAQgIAAgGgEg");
	this.shape_11.setTransform(312.75,127.825);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,255,255,0.2)").s().p("AgwBFIAAgFQALAAAEgEQAEgCACgFQABgDAAgLIAAgzQAAgYgBgEQgBgEgDgDQgCgCgEAAQgFAAgGACIgBgEIApgRIAFAAIAAAeQAQgeASAAQAIAAAGAFQAFAEAAAHQAAAGgEAEQgEAEgFgBQgFABgGgFQgHgFgDgBQgDAAgCAEQgIAGgGAOIAAA/QABALACAGQACAEAEACQAFACAJABIAAAFg");
	this.shape_12.setTransform(300.45,124.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(255,255,255,0.2)").s().p("AgmA1QgSgTAAggQAAgiASgTQASgTAZAAQAXAAAOAPQAPAPAAAZIhcAAQAAAcAPARQAOARATAAQANAAAKgHQAKgHAGgSIAFADQgDAUgPARQgPAQgWAAQgXAAgRgSgAgYgyQgJAJgCARIA9AAQAAgNgDgFQgDgIgIgFQgHgFgHAAQgMAAgKAKg");
	this.shape_13.setTransform(288.725,124.575);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(255,255,255,0.2)").s().p("AAABFIgwhwIgGgLQgDgEgEgDIgKgCIAAgFIA/AAIAAAFIgEAAQgGAAgDADQgDADAAAEQAAAGADAHIAeBJIAghMQADgJAAgDQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAIgEgDIgKgBIAAgFIArAAIAAAFQgHABgDACQgFAFgEAKIgwByg");
	this.shape_14.setTransform(274.425,124.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(255,255,255,0.2)").s().p("AAEBuQgVgVgLgdQgLgdAAgfQAAgsAWglQAVgmAkgQIAAAGQgSAKgLARQgLASgFAaQgGAbAAAdQAAAeAFAaQADAUAFAMQAFAMAKALQAJAMAOAKIAAAFQgWgLgOgPg");
	this.shape_15.setTransform(262.225,124.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_2
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AhjEuQgtgRgZgeQgagegJgkQgKgkAAhFIAAiyQAAhRAVguQAXgvAxgZQAxgZBBAAQBOAAAzAeQA0AeAUAyQAVAxAABZIAABRIjyAAIAACFQAAAqAGAMQAGAMARAAQAVAAAHgQQAHgQAAguIAAhRICyAAIAAAtQAAA5gHAfQgHAfgbAiQgbAjgoASQgpARg9AAQg6AAgugRgAgWjFQgFAMAAA0IAAAtIA2AAIAAgtQAAgwgFgOQgFgOgQAAQgSAAgFAMg");
	this.shape_16.setTransform(711.9,67.075);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AifFQQg2gegBhZIC1AAQAAAoAeAAQAUAAAHgMQAHgNAAgnIAAgvQgYAWgZALQgbALgeAAQgyAAghgUQgggVgNghQgMghABg9IAAjfQAAhXAfgnQAfgmBBAAQAjAAAdAOQAcAOAXAdIANguICvAAIAAHZQAABggFAcQgEAcgbAfQgbAggvAQQgxAQhIAAQhaAAg2gegAgVjzQgGANAAAnIAADOQgBApAGANQAFAMAQAAQARAAAGgPQAGgPAAgzIAAi/QAAgqgFgMQgFgLgRAAQgPAAgHANg");
	this.shape_17.setTransform(662.7,71.825);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AipEkQgpgcAAheIAAgyQAAhFAWgZQAVgZBXghQBbgkAGgMQAHgNAAgmQAAgxgHgOQgHgPgQAAQgTAAgFANQgEAMAAAzIAABBIiwAAIAAgqQAAhHAQgnQARgnAxgdQAygeBOAAQBfAAAxAiQAwAhAKAxQAJAxAACZIAAE0Ii2AAIAAg3QgRAhgaAQQgbARgmAAQgxAAgpgbgAgbBGQgHAXAAApQAAAwAGAOQAGAOATAAQAQAAAGgLQAFgLAAguIAAh/QgsAhgHAWg");
	this.shape_18.setTransform(614.125,67.075);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AjXFlIAAq+IC/AAIgDA2QAZggAdgRQAegQAkAAQArAAAgAXQAgAYAIAeQAIAfAABJIAAEDQAABUgKAjQgKAjgfAWQgfAUgsAAQgiAAgegPQgdgRgYggIAACNgAgWjqQgFAOAAA2IAAD+QAAA4AFAOQAGANARAAQASAAAFgMQAEgNAAgxIAAkHQAAg5gEgMQgEgMgTAAQgSAAgFANg");
	this.shape_19.setTransform(566.125,70.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAXFvQgbgOgXgdIgNAuIivAAIAAruIC8AAIAACxQAWgaAcgNQAcgOAiAAQAmABAdALQAcAMAPAWQAPAWADAVQADAVAABEIAAEVQAABDgJAiQgKAgggAZQgiAYguAAQghAAgdgOgAgXiFQgEAMAAA0IAAEHQAAAzAFANQAGAOAQAAQASAAAFgPQAGgNAAg3IAAkCQAAgxgHgOQgFgPgRAAQgSABgFANg");
	this.shape_20.setTransform(516.8,60.85);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AhiEuQgugRgZgeQgZgegKgkQgKgkAAhFIAAiyQAAhRAVguQAXgvAxgZQAxgZBBAAQBOAAAzAeQA0AeAUAyQAVAxAABZIAABRIjyAAIAACFQAAAqAGAMQAGAMARAAQAVAAAHgQQAHgQAAguIAAhRICyAAIAAAtQAAA5gHAfQgHAfgbAiQgbAjgoASQgpARg9AAQg6AAgtgRgAgWjFQgFAMAAA0IAAAtIA2AAIAAgtQAAgwgFgOQgFgOgQAAQgSAAgFAMg");
	this.shape_21.setTransform(467.65,67.075);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AA4F3QghitgYjcQgNBegqErIjzAAIhXrtIC9AAIAVEGIAVD8QAKjEAsk+IDJAAQAEAgASDXIAVEdQAQkQAmkEIC+AAIhWLtg");
	this.shape_22.setTransform(404.7,60.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AhvEpQgygXgUgmQgSgmgBhNIAAgdICnAAIAAAnQgBAxAHAPQAGAPASAAQAUAAAHgKQAJgKgBggQAAgsgKgLQgKgLhig3QhTgugRglQgTgmABg0QAAhKATgjQAUgjAugTQAvgTA9AAQA8AAAsAQQAqAPAXAaQAYAZAEAWQAFAWAAAuIAAAkIimAAIAAgiQAAgqgEgLQgGgMgSAAQgQAAgIALQgIAKAAAVQABAcAEAOQADANAUAPQASAQA+AeQBRAoAaAiQAaAkgBBDQAABLgTAnQgTAmguAUQguAVhAAAQhHAAgzgWg");
	this.shape_23.setTransform(327.05,67.075);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgtB5IgZh+IAAhzICNAAIAABzIgVB+g");
	this.shape_24.setTransform(295.7,34.825);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AhiEuQgugRgZgeQgZgegLgkQgJgkAAhFIAAiyQAAhRAVguQAWgvAygZQAygZBAAAQBOAAA0AeQAyAeAWAyQAUAxAABZIAABRIjyAAIAACFQAAAqAHAMQAGAMAPAAQAWAAAHgQQAHgQAAguIAAhRICyAAIAAAtQAAA5gHAfQgHAfgbAiQgbAjgoASQgoARg+AAQg6AAgtgRgAgWjFQgFAMAAA0IAAAtIA2AAIAAgtQAAgwgFgOQgFgOgQAAQgTAAgEAMg");
	this.shape_25.setTransform(262.75,67.075);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("Ah2E0IhepnICnAAIA0HBQAGgyAPi/QAIhrAKhlICnAAIhXJng");
	this.shape_26.setTransform(217.725,67.075);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AiUE5IAApmIC6AAIgHBRQAohXBOgFIAADYQg0AAgYAOQgXAOgGAZQgFAZgBBYIAADzg");
	this.shape_27.setTransform(179.5,66.525);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AhkF2QgtgPgaghQgbghgLgkQgLglAAhPIAAkGQAAhnASgzQASgzA1ggQA1gfBLAAQA9AAAxAWQAxAWAYAeQAYAgAIAmQAJAoAABUIAAD6QAABWgKAnQgIAmgeAjQgdAhgqAPQgoAPgzAAQhDAAgsgQgAgZkBQgIAPAAA6IAAFuQABBBAGAOQAGANAUABQAUgBAHgQQAHgPAAg4IAAlzQAAg7gGgPQgGgQgVAAQgUAAgGARg");
	this.shape_28.setTransform(135.75,60.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AArE0QgRhxgWi5QgGBSgOBSIgUCGIjMAAIhQpnIChAAQACAYAoFIQACgiAnk+ICbAAIAmFgQAJiaAijGIChAAIhLJng");
	this.shape_29.setTransform(78.5,67.075);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AhvEpQgygXgTgmQgUgmAAhNIAAgdICnAAIAAAnQAAAxAGAPQAGAPASAAQAUAAAHgKQAIgKAAggQAAgsgKgLQgLgLhhg3QhTgugRglQgSgmAAg0QgBhKAUgjQAUgjAugTQAvgTA9AAQA9AAArAQQArAPAWAaQAYAZAEAWQAFAWAAAuIAAAkIimAAIAAgiQAAgqgFgLQgEgMgTAAQgQAAgIALQgHAKAAAVQAAAcADAOQAEANAUAPQATAQA9AeQBRAoAaAiQAaAkAABDQgBBLgTAnQgUAmgtAUQguAVhAAAQhHAAgzgWg");
	this.shape_30.setTransform(24.5,67.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(0,0,738.3,139.8), null);


(lib.killmario = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgkB1QgQgGgKgNQgKgMgCgPQgBgOAAglIAAgoQAAgjABgPQACgPAJgMQAKgNAQgGQARgHAUABQAUAAAQAFQARAHAJAMQALAMABAPQACAPABAkIAAAoQgBAkgCAPQgBAPgKAMQgJAMgRAHQgQAGgVAAQgTABgRgHgAgHhOQgCADAAASIAABuQAAAUABAFQACAFAGABQAHAAACgGQABgGAAgVIAAhsQAAgRgBgEQgDgEgGgBQgEAAgDAFg");
	this.shape.setTransform(133.7,19.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AggB3IAAjtIBBAAIAADtg");
	this.shape_1.setTransform(120.225,19.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAMB3IAAhPQAAgUgCgEQgEgFgNABIAABrIhCAAIAAjtIAvAAQAuAAARAEQAQADALAOQAKAOAAAeQAAAcgIAKQgHAJgWACQAUAEAHAHQAHAHACAHQABAGAAAdIAAA/gAgHgYQALAAAEgDQAFgDgBgQIAAgNQAAgLgDgEQgFgDgLAAg");
	this.shape_2.setTransform(106.95,19.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAQB3IgEgrIgXAAIgDArIhFAAIAijtIBfAAIAmDtgAgLAiIAWAAQgGgngEg8QgKBDgCAgg");
	this.shape_3.setTransform(90.1,19.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAsB3IAAifIgXCfIgoAAIgYicIAACcIg6AAIAAjtIBWAAIAHAzIAJA8IAPhvIBWAAIAADtg");
	this.shape_4.setTransform(70.425,19.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag0B3IAAjtIBBAAIAAC9IAoAAIAAAwg");
	this.shape_5.setTransform(47.575,19.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag0B3IAAjtIBBAAIAAC9IAoAAIAAAwg");
	this.shape_6.setTransform(35.375,19.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AggB3IAAjtIBBAAIAADtg");
	this.shape_7.setTransform(24.075,19.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AANB3IgahmIAABmIhDAAIAAjtIBDAAIAABcIAchcIA+AAIgmBrIAqCCg");
	this.shape_8.setTransform(11.575,19.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AgkB1QgQgGgKgNQgKgMgCgPQgBgOAAglIAAgoQAAgjABgPQACgPAJgMQAKgNAQgGQARgHAUABQAUAAAQAFQARAHAJAMQALAMABAPQACAPABAkIAAAoQgBAkgCAPQgBAPgKAMQgJAMgRAHQgQAGgVAAQgTABgRgHgAgHhOQgCADAAASIAABuQAAAUABAFQACAFAGABQAHAAACgGQABgGAAgVIAAhsQAAgRgBgEQgDgEgGgBQgEAAgDAFg");
	this.shape_9.setTransform(133.7,19.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AggB3IAAjtIBBAAIAADtg");
	this.shape_10.setTransform(120.225,19.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("AAMB3IAAhPQAAgUgCgEQgEgFgNABIAABrIhCAAIAAjtIAvAAQAuAAARAEQAQADALAOQAKAOAAAeQAAAcgIAKQgHAJgWACQAUAEAHAHQAHAHACAHQABAGAAAdIAAA/gAgHgYQALAAAEgDQAFgDgBgQIAAgNQAAgLgDgEQgFgDgLAAg");
	this.shape_11.setTransform(106.95,19.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("AAQB3IgEgrIgXAAIgDArIhFAAIAijtIBfAAIAmDtgAgLAiIAWAAQgGgngEg8QgKBDgCAgg");
	this.shape_12.setTransform(90.1,19.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0000").s().p("AAsB3IAAifIgXCfIgoAAIgYicIAACcIg6AAIAAjtIBWAAIAHAzIAJA8IAPhvIBWAAIAADtg");
	this.shape_13.setTransform(70.425,19.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF0000").s().p("Ag0B3IAAjtIBBAAIAAC9IAoAAIAAAwg");
	this.shape_14.setTransform(47.575,19.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF0000").s().p("Ag0B3IAAjtIBBAAIAAC9IAoAAIAAAwg");
	this.shape_15.setTransform(35.375,19.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF0000").s().p("AggB3IAAjtIBBAAIAADtg");
	this.shape_16.setTransform(24.075,19.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF0000").s().p("AANB3IgahmIAABmIhDAAIAAjtIBDAAIAABcIAchcIA+AAIgmBrIAqCCg");
	this.shape_17.setTransform(11.575,19.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},1).wait(3));

	// Layer_2
	this.instance = new lib.mainbutton_style();
	this.instance.setTransform(68.8,20,1,1,0,0,0,90,27);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.2,-8,182,56);


(lib.blogs = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgqByQgTgJgGgPQgGgOAAgbIAAgPIA+AAIAAAcQAAAOADAEQACADAGAAQAGAAAEgEQADgGAAgJQAAgVgGgGQgHgHgXgPQgZgPgIgGQgIgHgFgMQgGgMAAgTQAAgbAIgNQAHgMARgIQARgGAXgBQAZAAASAIQASAIAGAMQAGAMAAAcIAAAJIg9AAIAAgSQAAgMgDgDQgCgDgFAAQgFAAgDAEQgEAFAAAJQAAALAEAHQADAFAPAJQAsAZALAOQAMAQAAAjQAAAZgHAMQgGAMgSAJQgTAIgYAAQgZAAgTgKg");
	this.shape.setTransform(75.375,20.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgqB0QgPgHgIgMQgHgLgCgMQgCgMAAgZIAAhGQAAghAEgQQAEgPATgMQASgOAeAAQAcAAATAMQATAKAGAQQAGAPAAAeIAAAKIhCAAIAAgWQAAgUgCgGQgCgEgHAAQgFAAgDAEQgCAFAAASIAABxQAAAPACAGQADAEAFAAQAHAAADgFQADgGAAgRIAAgcIgNAAIAAgjIBNAAIAAB+IgqAAIgGgRQgHALgKAGQgKAFgNABQgRgBgOgHg");
	this.shape_1.setTransform(58.125,20.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgkB1QgQgGgKgNQgKgMgCgPQgBgOgBglIAAgnQABgkABgPQACgPAJgMQAKgNAQgGQAQgHAVAAQAUABARAFQAQAHAJAMQALAMACAPQABAPAAAlIAAAnQAAAkgBAPQgCAPgJAMQgKAMgQAHQgRAGgVABQgUAAgQgHgAgGhPQgEAEAAATIAABtQAAAVADAFQABAEAGAAQAHABABgGQACgGAAgUIAAhsQAAgRgCgFQgCgEgGAAQgEAAgCADg");
	this.shape_2.setTransform(40.5,20.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag0B2IAAjrIBBAAIAAC8IAoAAIAAAvg");
	this.shape_3.setTransform(26.575,20.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhMB2IAAjrIBCAAQAfAAAPAEQAQAEALAOQAKAOgBAfQABAVgIAIQgGAIgVAEQAXAFAIALQAIAKAAAYIAAAWQAAAYgFALQgHAMgMAFQgOADgnAAgAgJBOQAMgBAFgDQADgEAAgOIAAgWQAAgPgDgEQgEgDgNgBgAgJgZIAGAAQAJABADgFQACgEAAgWQAAgLgCgEQgDgFgDgBIgMgBg");
	this.shape_4.setTransform(11.2,20.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

	// Layer_2
	this.instance = new lib.mainbutton_style();
	this.instance.setTransform(40.6,20.55,1,1,0,0,0,90,27);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.4,-7.4,182,56);


(lib.about = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag0B2IAAjrIBlAAIAAAvIgpAAIAAAtIAnAAIAAAsIgnAAIAAA0IAtAAIAAAvg");
	this.shape.setTransform(113.825,20.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AApB2IAAieIgWCeIglAAIgWibIAACbIg2AAIAAjrIBQAAIAHAyIAIA8IAOhuIBQAAIAADrg");
	this.shape_1.setTransform(96.55,20.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgeB2IAAi8IgkAAIAAgvICFAAIAAAvIgkAAIAAC8g");
	this.shape_2.setTransform(73.575,20.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgjByQgPgHgJgLQgHgMgCgMQgBgMgBgpIAAiLIA+AAIAACwQAAAQACAEQACAFAEAAQAFAAACgFQACgEAAgSIAAiuIA+AAIAACdQAAAcgCAKQgCALgJAMQgIALgOAGQgPAGgTAAQgUAAgRgHg");
	this.shape_3.setTransform(58.45,20.65);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AghB1QgPgGgJgNQgKgMgBgPQgCgOAAglIAAgnQAAgkACgPQABgPAJgMQAJgNAPgGQAPgHATAAQATABAPAFQAQAHAJAMQAJAMACAPQABAPAAAlIAAAnQAAAkgBAPQgCAPgJAMQgJAMgPAHQgPAGgUABQgSAAgPgHgAgGhPQgDAEAAATIAABtQAAAVACAFQACAEAFAAQAGABACgGQACgGAAgUIAAhsQAAgRgCgFQgCgEgGAAQgDAAgDADg");
	this.shape_4.setTransform(42.025,20.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhHB2IAAjrIA+AAQAcAAAPAEQAPAEAJAOQAJAOAAAfQAAAVgGAIQgHAIgTAEQAVAFAIALQAIAKAAAYIAAAWQAAAYgGALQgFAMgMAFQgMADglAAgAgJBOQAMgBADgDQAEgEAAgOIAAgWQAAgPgDgEQgEgDgMgBgAgJgZIAGAAQAIABACgFQADgEAAgWQAAgLgCgEQgCgFgDgBIgMgBg");
	this.shape_5.setTransform(25.725,20.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAPB2IgDgqIgVAAIgEAqIhAAAIAfjrIBZAAIAjDrgAgKAiIAUAAQgFgngEg8QgJBDgCAgg");
	this.shape_6.setTransform(9.675,20.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

	// Layer_2
	this.instance = new lib.mainbutton_style();
	this.instance.setTransform(60.6,20.45,1,1,0,0,0,90,27);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.4,-7.5,182,56);


(lib.guestbook = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AANB2IgahlIAABlIhDAAIAAjsIBDAAIAABcIAchcIA+AAIgmBrIAqCBg");
	this.shape.setTransform(143.975,19.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgkB1QgQgGgKgNQgKgMgCgPQgCgOABglIAAgoQgBgjACgPQACgPAJgMQAKgNAQgGQAQgHAVABQAUAAAQAFQARAHAJAMQAKAMADAPQACAPAAAkIAAAoQAAAkgCAPQgCAPgKAMQgJAMgRAHQgQAGgVABQgUAAgQgHgAgHhPQgDAEAAATIAABtQAAAVACAEQACAFAGABQAHAAABgGQACgGAAgVIAAhrQAAgSgCgEQgCgEgGgBQgEAAgDAEg");
	this.shape_1.setTransform(125.8,19.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgkB1QgQgGgKgNQgKgMgCgPQgBgOgBglIAAgoQABgjABgPQACgPAKgMQAJgNAQgGQARgHAUABQAVAAAQAFQAQAHAKAMQAJAMADAPQABAPAAAkIAAAoQAAAkgBAPQgCAPgJAMQgKAMgQAHQgQAGgWABQgTAAgRgHgAgGhPQgDAEAAATIAABtQAAAVACAEQABAFAGABQAHAAACgGQABgGAAgVIAAhrQAAgSgBgEQgCgEgHgBQgEAAgCAEg");
	this.shape_2.setTransform(108.2,19.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhMB2IAAjsIBCAAQAeABARAEQAPAEALAOQAJAOABAfQAAAVgIAIQgHAIgUAEQAXAGAIAJQAIAMAAAXIAAAWQAAAYgFALQgHAMgMAEQgNAEgoAAgAgJBOQAMgBAFgDQADgEAAgOIAAgXQAAgOgDgEQgEgDgNAAgAgJgZIAGAAQAIABAEgFQACgEAAgWQAAgLgCgEQgCgEgEgCIgMgBg");
	this.shape_3.setTransform(90.65,19.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AggB2IAAi8IgnAAIAAgwICPAAIAAAwIgnAAIAAC8g");
	this.shape_4.setTransform(74.225,19.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgqByQgTgJgGgPQgGgOAAgbIAAgQIA+AAIAAAdQAAAOADADQACAEAGABQAGgBAEgFQADgEAAgKQAAgVgGgGQgHgGgXgQQgZgPgIgGQgIgHgFgMQgGgMAAgTQAAgbAIgNQAHgMARgIQARgGAXAAQAZgBASAIQASAIAGAMQAGAMAAAbIAAAKIg9AAIAAgSQAAgMgDgDQgCgDgFgBQgFABgDAEQgEAEAAAKQAAALAEAGQADAGAPAJQAsAZALAOQAMAQAAAjQAAAZgHAMQgGAMgSAIQgTAJgYAAQgZAAgTgKg");
	this.shape_5.setTransform(58.475,19.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag5B2IAAjsIBuAAIAAAwIgsAAIAAAtIApAAIAAAsIgpAAIAAA0IAwAAIAAAvg");
	this.shape_6.setTransform(43.85,19.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AglByQgRgHgJgLQgJgMgBgMQgBgMgBgpIAAiLIBDAAIAACwQAAAQACAFQABAEAFAAQAGAAABgFQADgFAAgSIAAitIBBAAIAACdQAAAcgBAKQgCALgJAMQgKALgPAGQgPAGgUAAQgXAAgRgHg");
	this.shape_7.setTransform(28,19.85);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgqB0QgPgIgIgLQgHgLgCgMQgCgMAAgZIAAhFQAAgiAEgQQAEgPATgMQASgNAeAAQAcAAATALQATALAGAPQAGAPAAAeIAAAKIhCAAIAAgWQAAgUgCgFQgCgGgHAAQgFABgDAEQgCAEAAASIAAByQAAAPACAFQADAFAFABQAHgBADgFQADgGAAgRIAAgcIgNAAIAAgjIBNAAIAAB+IgqAAIgGgQQgHAKgKAGQgKAFgNABQgRgBgOgHg");
	this.shape_8.setTransform(10.275,19.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

	// Layer_2
	this.instance = new lib.mainbutton_style();
	this.instance.setTransform(74.8,19.6,1,1,0,0,0,90,27);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.2,-8.4,182,56);


// stage content:
(lib.main = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
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
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
		
		/* Click to Go to Web Page
		Clicking on the specified symbol instance loads the URL in a new browser window.
		
		Instructions:
		1. Replace http://www.adobe.com with the desired URL address.
		   Keep the quotation marks ("").
		*/
		
		this.button_10.addEventListener("click", fl_ClickToGoToWebPage_14);
		
		function fl_ClickToGoToWebPage_14() {
			window.open("../aboutpage/about.html", "_parent");
		}
		
		/* Click to Go to Web Page
		Clicking on the specified symbol instance loads the URL in a new browser window.
		
		Instructions:
		1. Replace http://www.adobe.com with the desired URL address.
		   Keep the quotation marks ("").
		*/
		
		this.button_11.addEventListener("click", fl_ClickToGoToWebPage_15);
		
		function fl_ClickToGoToWebPage_15() {
			window.open("../blogspage/blogs.html", "_parent");
		}
		
		/* Click to Go to Web Page
		Clicking on the specified symbol instance loads the URL in a new browser window.
		
		Instructions:
		1. Replace http://www.adobe.com with the desired URL address.
		   Keep the quotation marks ("").
		*/
		
		this.button_12.addEventListener("click", fl_ClickToGoToWebPage_16);
		
		function fl_ClickToGoToWebPage_16() {
			window.open("../killmariopage/game.html", "_parent");
		}
		
		/* Click to Go to Web Page
		Clicking on the specified symbol instance loads the URL in a new browser window.
		
		Instructions:
		1. Replace http://www.adobe.com with the desired URL address.
		   Keep the quotation marks ("").
		*/
		
		this.button_14.addEventListener("click", fl_ClickToGoToWebPage_17);
		
		function fl_ClickToGoToWebPage_17() {
			window.open("../placeholderpage/placeholder.html", "_parent");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// logo
	this.instance = new lib.logo();
	this.instance.setTransform(543.4,67.1,1,1,0,0,0,313.4,59.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// buttons
	this.button_14 = new lib.guestbook();
	this.button_14.name = "button_14";
	this.button_14.setTransform(708.8,187.7,1,1,0,0,0,77.5,20.3);
	new cjs.ButtonHelper(this.button_14, 0, 1, 2, false, new lib.guestbook(), 3);

	this.button_12 = new lib.killmario();
	this.button_12.name = "button_12";
	this.button_12.setTransform(841.75,167);
	new cjs.ButtonHelper(this.button_12, 0, 1, 2, false, new lib.killmario(), 3);

	this.button_11 = new lib.blogs();
	this.button_11.name = "button_11";
	this.button_11.setTransform(502.15,186.75,1,1,0,0,0,43,20.3);
	new cjs.ButtonHelper(this.button_11, 0, 1, 2, false, new lib.blogs(), 3);

	this.button_10 = new lib.about();
	this.button_10.name = "button_10";
	this.button_10.setTransform(290.9,186.85,1,1,0,0,0,60.9,20.3);
	new cjs.ButtonHelper(this.button_10, 0, 1, 2, false, new lib.about(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.button_10},{t:this.button_11},{t:this.button_12},{t:this.button_14}]}).wait(1));

	// main
	this.instance_1 = new lib.main_1();
	this.instance_1.setTransform(600.5,509.2,1,1,0,0,0,399.9,265);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(799.6,907.9,202,-132.69999999999993);
// library properties:
lib.properties = {
	id: '6B41238E672D2F418E44C97D76E3ECBD',
	width: 1200,
	height: 1800,
	fps: 24,
	color: "#000000",
	opacity: 0.00,
	manifest: [],
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
an.compositions['6B41238E672D2F418E44C97D76E3ECBD'] = {
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
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;