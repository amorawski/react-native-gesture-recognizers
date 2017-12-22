'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='src/recognizers/swipeable.js';var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');
var _isValidSwipe=require('../utils/isValidSwipe');var _isValidSwipe2=_interopRequireDefault(_isValidSwipe);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var directions={
SWIPE_UP:'SWIPE_UP',
SWIPE_DOWN:'SWIPE_DOWN',
SWIPE_LEFT:'SWIPE_LEFT',
SWIPE_RIGHT:'SWIPE_RIGHT'};


var propTypes={
onSwipeBegin:_react.PropTypes.func,
onSwipe:_react.PropTypes.func,
onSwipeEnd:_react.PropTypes.func,
swipeDecoratorStyle:_react.PropTypes.object};


var swipeable=function swipeable(){var _ref=arguments.length>0&&arguments[0]!==undefined?arguments[0]:











{},_ref$horizontal=_ref.horizontal,horizontal=_ref$horizontal===undefined?false:_ref$horizontal,_ref$vertical=_ref.vertical,vertical=_ref$vertical===undefined?false:_ref$vertical,_ref$left=_ref.left,left=_ref$left===undefined?false:_ref$left,_ref$right=_ref.right,right=_ref$right===undefined?false:_ref$right,_ref$up=_ref.up,up=_ref$up===undefined?false:_ref$up,_ref$down=_ref.down,down=_ref$down===undefined?false:_ref$down,_ref$continuous=_ref.continuous,continuous=_ref$continuous===undefined?true:_ref$continuous,_ref$initialVelocityT=_ref.initialVelocityThreshold,initialVelocityThreshold=_ref$initialVelocityT===undefined?0.7:_ref$initialVelocityT,_ref$verticalThreshol=_ref.verticalThreshold,verticalThreshold=_ref$verticalThreshol===undefined?10:_ref$verticalThreshol,_ref$horizontalThresh=_ref.horizontalThreshold,horizontalThreshold=_ref$horizontalThresh===undefined?10:_ref$horizontalThresh,_ref$setGestureState=_ref.setGestureState,setGestureState=_ref$setGestureState===undefined?true:_ref$setGestureState;return function(BaseComponent){var _class,_temp;

var checkHorizontal=horizontal||left||right;
var checkVertical=vertical||up||down;

return _temp=_class=function(_Component){_inherits(_class,_Component);



function _class(props,context){_classCallCheck(this,_class);var _this=_possibleConstructorReturn(this,(_class.__proto__||Object.getPrototypeOf(_class)).call(this,
props,context));_this.







































































































handleTerminationAndRelease=function(){
if(_this.swipeDetected){var
onSwipeEnd=_this.props.onSwipeEnd;
onSwipeEnd&&onSwipeEnd({
direction:_this.swipeDirection});

}

_this.swipeDetected=false;
_this.velocityProp=null;
_this.distanceProp=null;
_this.swipeDirection=null;
};_this.state={swipe:{direction:null,distance:0,velocity:0}};_this.swipeDetected=false;_this.velocityProp=null;_this.distanceProp=null;_this.swipeDirection=null;return _this;}_createClass(_class,[{key:'componentWillMount',value:function componentWillMount(){var _this2=this;this.panResponder=_reactNative.PanResponder.create({onStartShouldSetPanResponder:function onStartShouldSetPanResponder(evt){return evt.nativeEvent.touches.length===1;},onMoveShouldSetPanResponder:function onMoveShouldSetPanResponder(evt){return evt.nativeEvent.touches.length===1;},onPanResponderMove:function onPanResponderMove(evt,gestureState){var dx=gestureState.dx,dy=gestureState.dy,vx=gestureState.vx,vy=gestureState.vy;var _props=_this2.props,onSwipeBegin=_props.onSwipeBegin,onSwipe=_props.onSwipe;if(!continuous&&_this2.swipeDetected){return;}var initialDetection=false;var validHorizontal=false;var validVertical=false;if(!_this2.swipeDetected){initialDetection=true;validHorizontal=checkHorizontal&&(0,_isValidSwipe2.default)(vx,dy,initialVelocityThreshold,verticalThreshold);validVertical=checkVertical&&(0,_isValidSwipe2.default)(vy,dx,initialVelocityThreshold,horizontalThreshold);if(validHorizontal){_this2.velocityProp='vx';_this2.distanceProp='dx';if((horizontal||left)&&dx<0){_this2.swipeDirection=directions.SWIPE_LEFT;}else if((horizontal||right)&&dx>0){_this2.swipeDirection=directions.SWIPE_RIGHT;}}else if(validVertical){_this2.velocityProp='vy';_this2.distanceProp='dy';if((vertical||up)&&dy<0){_this2.swipeDirection=directions.SWIPE_UP;}else if((vertical||down)&&dy>0){_this2.swipeDirection=directions.SWIPE_DOWN;}}if(_this2.swipeDirection){_this2.swipeDetected=true;}}if(_this2.swipeDetected){var distance=gestureState[_this2.distanceProp];var velocity=gestureState[_this2.velocityProp];var swipeState={direction:_this2.swipeDirection,distance:distance,velocity:velocity};if(initialDetection){onSwipeBegin&&onSwipeBegin(swipeState);}else{onSwipe&&onSwipe(swipeState);}if(setGestureState){_this2.setState({swipe:swipeState});}}},onPanResponderTerminationRequest:function onPanResponderTerminationRequest(){return true;},onPanResponderTerminate:this.handleTerminationAndRelease,onPanResponderRelease:this.handleTerminationAndRelease});}},{key:'render',value:function render()

{var _props2=






this.props,onSwipeBegin=_props2.onSwipeBegin,onSwipe=_props2.onSwipe,onSwipeEnd=_props2.onSwipeEnd,swipeDecoratorStyle=_props2.swipeDecoratorStyle,props=_objectWithoutProperties(_props2,['onSwipeBegin','onSwipe','onSwipeEnd','swipeDecoratorStyle']);

var style=_extends({},
swipeDecoratorStyle,{
alignSelf:'flex-start'});


var state=setGestureState?this.state:null;

return(
_react2.default.createElement(_reactNative.View,_extends({},this.panResponder.panHandlers,{style:style,__source:{fileName:_jsxFileName,lineNumber:178}}),
_react2.default.createElement(BaseComponent,_extends({},props,state,{__source:{fileName:_jsxFileName,lineNumber:179}}))));


}}]);return _class;}(_react.Component),_class.propTypes=propTypes,_temp;

};};

swipeable.directions=directions;exports.default=

swipeable;