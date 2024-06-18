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



(lib.Bitmap2 = function() {
	this.initialize(img.Bitmap2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,207,53);


(lib.Bitmap3 = function() {
	this.initialize(img.Bitmap3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,203,49);


(lib.highlight = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(1));

	// Layer_1
	this.instance = new lib.Bitmap2();
	this.instance.setTransform(-6,-6);

	this.instance_1 = new lib.Bitmap3();
	this.instance_1.setTransform(-4,-4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AMkCpQgXgQABgiIAiAFQACAQAKAHQANAKAXAAQAYAAAOgKQAMgKAGgRQACgLAAgiQgXAbgjAAQgqAAgYgfQgXgfAAgqQAAgeALgZQAKgZAVgOQAUgNAbAAQAlAAAYAdIAAgZIAhAAIAACzQAAAwgKAUQgKAUgWAMQgVAMgfAAQglAAgXgRgAM7g9QgQATAAAlQAAAoAQATQARATAYAAQAYAAAQgTQARgTAAgmQAAgngRgTQgRgTgXAAQgYAAgRATgAmzBNQgdgkABhPQAAgzAKgfQAKgfAVgRQAUgRAgAAQAXAAASAKQARAJALARQAMASAGAZQAHAZAAArQAAAxgLAfQgKAfgVARQgUARggAAQgpAAgYgegAmZiHQgSAaAABHQgBBFASAXQAQAYAYAAQAYAAARgYQAQgXAAhFQAAhHgQgXQgRgYgZAAQgYAAgOAVgAG/BPQgagcgBg0QAAg6AhgbQAagXAnAAQArAAAbAcQAbAcAAAxQAAAngNAXQgMAXgXANQgWAMgbAAQgsAAgbgbgAHag9QgSAUAAAoQAAAnASAUQARAUAbAAQAaAAARgUQASgUAAgoQAAgngSgTQgRgUgaAAQgbAAgRATgABzBPQgbgdAAgyQAAg0AbgcQAcgdAqAAQAqAAAbAcQAaAcAAA0IgBAIIiaAAQACAiARASQASATAZAAQAUAAAOgLQAOgKAHgWIAkAEQgIAggXASQgXARglAAQgtAAgbgbgACShAQgSAQgBAbIB0AAQgCgagLgNQgRgUgbAAQgYAAgQAQgAuhBaQgWgRgGghIAjgGQADAVAOALQANAMAYAAQAYAAAMgKQAMgKgBgNQAAgMgKgHQgHgFgdgHQgmgKgQgGQgOgHgIgNQgIgMAAgQQAAgNAGgMQAHgMALgIQAIgGAPgEQAOgEAPAAQAZAAATAHQASAHAJAMQAJAMADAUIgjAFQgCgQgLgJQgLgJgVAAQgYAAgKAIQgLAIAAAKQAAAHAFAGQADAFAKAEIAfAJQAlAKAPAGQAPAHAIALQAIAMAAASQABARgLAQQgKAPgTAJQgUAIgYAAQgoAAgVgQgAKPBmIAAjPIAgAAIAAAgQAMgWAKgHQAKgHANAAQARAAATALIgNAhQgNgIgMAAQgMAAgJAHQgJAHgEAMQgGATAAAWIAABsgAFMBmIAAgoIApAAIAAAogAgpBmIhPjPIAlAAIAsB8QAIAUAGAVQAEgQAJgXIAth+IAkAAIhNDPgAjoBmIAAjPIAfAAIAAAgQAMgWALgHQAKgHAMAAQASAAASALIgLAhQgNgIgNAAQgMAAgJAHQgJAHgEAMQgGATAAAWIAABsgApJBmIgoifIgrCfIglAAIg/jPIAkAAIAuCkIAKgrIAih5IAkAAIApCfIAwifIAiAAIhBDPg");
	this.shape.setTransform(95.75,18.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6,-6,207,53);


(lib.sw0rveorg = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#666666").s().p("Ag9CDQgXgQABgiIAiAFQACAQAKAIQANAJAXAAQAXAAANgJQANgKAFgSQADgLAAgiQgXAbgiAAQgqAAgYgfQgXgeAAgrQAAgeAKgZQALgZAVgNQAUgOAbAAQAkAAAYAeIAAgZIAgAAIAACyQAAAxgJATQgKAVgWAMQgVALgeAAQglAAgXgRgAgmhjQgQATAAAmQAAApAQARQAQATAYAAQAYAAAQgSQARgTAAgnQAAgngRgSQgRgUgYAAQgWAAgRATg");
	this.shape.setTransform(185.725,35.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("Ag3BqIAAjOIAfAAIAAAfQAMgWALgHQAJgHAMAAQASAAASALIgMAhQgNgIgMAAQgMAAgIAHQgJAHgEAMQgGATAAAXIAABrg");
	this.shape_1.setTransform(170.225,31.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("AhFBRQgbgcAAg1QAAg5AggbQAagXAmAAQArAAAbAcQAbAcAAAxQAAAngMAXQgMAXgXANQgXAMgbAAQgqAAgbgbgAgqg7QgSAUAAAnQAAAoASAUQAQAUAaAAQAaAAARgUQASgUAAgoQAAgngSgTQgRgUgaAAQgaAAgQATg");
	this.shape_2.setTransform(150.85,31.325);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("AgTAUIAAgnIAnAAIAAAng");
	this.shape_3.setTransform(134.35,39.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#666666").s().p("AhEBRQgbgdAAgyQAAg0AbgcQAbgdAqAAQAqAAAaAcQAbAcAAAzIgBAJIiZAAQACAiARASQARATAZAAQAUAAANgLQAOgKAIgWIAkAEQgIAggXASQgYARgkAAQgsAAgbgbgAgmg+QgRAQgBAbIBzAAQgDgagLgNQgRgUgaAAQgYAAgQAQg");
	this.shape_4.setTransform(117.525,31.325);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#666666").s().p("AgPBoIhPjPIAlAAIAsB8QAIAUAFAVQAEgQAJgXIAuh+IAkAAIhODPg");
	this.shape_5.setTransform(96.525,31.325);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#666666").s().p("Ag3BqIAAjOIAfAAIAAAfQAMgWALgHQAJgHAMAAQASAAASALIgMAhQgNgIgMAAQgMAAgIAHQgJAHgEAMQgGATAAAXIAABrg");
	this.shape_6.setTransform(81.425,31.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#666666").s().p("AhAB0QgcgjgBhRQAAgyALgfQAKgfAVgQQAVgRAeAAQAXAAASAJQARAJALASQALARAHAZQAGAZABAqQAAAygLAfQgLAfgUARQgVARgfAAQgpAAgXgegAgmhgQgTAbAABFQABBHARAXQAPAXAYAAQAYAAARgXQAQgYAAhGQAAhGgQgXQgRgXgYAAQgXAAgPAUg");
	this.shape_7.setTransform(62,27.575);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#666666").s().p("AApBoIghh7IgIgkIgpCfIglAAIg/jPIAkAAIAhB3IANAtIAKgrIAhh5IAjAAIAgB4IAKAnIAMgoIAjh3IAiAAIhADPg");
	this.shape_8.setTransform(36.425,31.325);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#666666").s().p("Ag6BcQgVgRgGghIAjgGQADAVANALQAOAMAXAAQAXAAAMgKQAMgKAAgNQAAgMgKgHQgIgFgcgHQgmgKgPgGQgPgHgIgNQgHgMgBgQQAAgNAHgMQAGgMALgIQAJgGAOgEQAOgEAQAAQAYAAASAHQASAHAJAMQAJAMADAUIgiAFQgDgQgKgJQgMgJgUAAQgXAAgLAIQgLAIAAAKQABAHAEAGQAEAFAJAEIAfAJQAlAKAOAGQAPAGAJAMQAIAMAAASQAAARgKAQQgLAPgTAJQgTAIgYAAQgoAAgVgQg");
	this.shape_9.setTransform(11.95,31.325);

	this.instance = new lib.highlight();
	this.instance.setTransform(99.15,31.55,1,1,0,0,0,95.8,18.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag9CDQgXgQABgiIAiAFQACAQAKAIQANAJAXAAQAXAAANgJQANgKAFgSQADgLAAgiQgXAbgiAAQgqAAgYgfQgXgeAAgrQAAgeAKgZQALgZAVgNQAUgOAbAAQAkAAAYAeIAAgZIAgAAIAACyQAAAxgJATQgKAVgWAMQgVALgeAAQglAAgXgRgAgmhjQgQATAAAmQAAApAQARQAQATAYAAQAYAAAQgSQARgTAAgnQAAgngRgSQgRgUgYAAQgWAAgRATg");
	this.shape_10.setTransform(185.725,35.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag3BqIAAjOIAfAAIAAAfQAMgWALgHQAJgHAMAAQASAAASALIgMAhQgNgIgMAAQgMAAgIAHQgJAHgEAMQgGATAAAXIAABrg");
	this.shape_11.setTransform(170.225,31.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhFBRQgbgcAAg1QAAg5AggbQAagXAmAAQArAAAbAcQAbAcAAAxQAAAngMAXQgMAXgXANQgXAMgbAAQgqAAgbgbgAgqg7QgSAUAAAnQAAAoASAUQAQAUAaAAQAaAAARgUQASgUAAgoQAAgngSgTQgRgUgaAAQgaAAgQATg");
	this.shape_12.setTransform(150.85,31.325);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgTAUIAAgnIAnAAIAAAng");
	this.shape_13.setTransform(134.35,39.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhEBRQgbgdAAgyQAAg0AbgcQAbgdAqAAQAqAAAaAcQAbAcAAAzIgBAJIiZAAQACAiARASQARATAZAAQAUAAANgLQAOgKAIgWIAkAEQgIAggXASQgYARgkAAQgsAAgbgbgAgmg+QgRAQgBAbIBzAAQgDgagLgNQgRgUgaAAQgYAAgQAQg");
	this.shape_14.setTransform(117.525,31.325);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgPBoIhPjPIAlAAIAsB8QAIAUAFAVQAEgQAJgXIAuh+IAkAAIhODPg");
	this.shape_15.setTransform(96.525,31.325);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("Ag3BqIAAjOIAfAAIAAAfQAMgWALgHQAJgHAMAAQASAAASALIgMAhQgNgIgMAAQgMAAgIAHQgJAHgEAMQgGATAAAXIAABrg");
	this.shape_16.setTransform(81.425,31.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhAB0QgcgjgBhRQAAgyALgfQAKgfAVgQQAVgRAeAAQAXAAASAJQARAJALASQALARAHAZQAGAZABAqQAAAygLAfQgLAfgUARQgVARgfAAQgpAAgXgegAgmhgQgTAbAABFQABBHARAXQAPAXAYAAQAYAAARgXQAQgYAAhGQAAhGgQgXQgRgXgYAAQgXAAgPAUg");
	this.shape_17.setTransform(62,27.575);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AApBoIghh7IgIgkIgpCfIglAAIg/jPIAkAAIAhB3IANAtIAKgrIAhh5IAjAAIAgB4IAKAnIAMgoIAjh3IAiAAIhADPg");
	this.shape_18.setTransform(36.425,31.325);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("Ag6BcQgVgRgGghIAjgGQADAVANALQAOAMAXAAQAXAAAMgKQAMgKAAgNQAAgMgKgHQgIgFgcgHQgmgKgPgGQgPgHgIgNQgHgMgBgQQAAgNAHgMQAGgMALgIQAJgGAOgEQAOgEAQAAQAYAAASAHQASAHAJAMQAJAMADAUIgiAFQgDgQgKgJQgMgJgUAAQgXAAgLAIQgLAIAAAKQABAHAEAGQAEAFAJAEIAfAJQAlAKAOAGQAPAGAJAMQAIAMAAASQAAARgKAQQgLAPgTAJQgTAIgYAAQgoAAgVgQg");
	this.shape_19.setTransform(11.95,31.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]},1).wait(2));

	// Layer_2
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(0,0,0,0.008)").s().p("AvtDcIAAm3IfbAAIAAG3g");
	this.shape_20.setTransform(100.575,30);

	this.timeline.addTween(cjs.Tween.get(this.shape_20).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.6,3.5,207,56.5);


// stage content:
(lib.site_advert_banner = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.sw0rveorg();
	this.instance.setTransform(364,39.4,1,1,0,0,0,99.8,24.4);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.sw0rveorg(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(625.6,63.5,-157,11.5);
// library properties:
lib.properties = {
	id: 'EF2FD62C36B07A4D99419D0875EFC8CF',
	width: 728,
	height: 90,
	fps: 24,
	color: "#000000",
	opacity: 1.00,
	manifest: [
		{src:"images/Bitmap2.png", id:"Bitmap2"},
		{src:"images/Bitmap3.png", id:"Bitmap3"}
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
an.compositions['EF2FD62C36B07A4D99419D0875EFC8CF'] = {
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