'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='src/recognizers/pannable.js';var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var initialState={
absoluteChangeX:0,
absoluteChangeY:0,
changeX:0,
changeY:0};


var propTypes={
onPanBegin:_react.PropTypes.func,
onPan:_react.PropTypes.func,
onPanEnd:_react.PropTypes.func,
resetPan:_react.PropTypes.bool,
panDecoratorStyle:_react.PropTypes.object};exports.default=


function(){var _ref=arguments.length>0&&arguments[0]!==undefined?arguments[0]:

{},_ref$setGestureState=_ref.setGestureState,setGestureState=_ref$setGestureState===undefined?true:_ref$setGestureState;return function(BaseComponent){var _class,_temp;
return _temp=_class=function(_Component){_inherits(_class,_Component);



function _class(props,context){_classCallCheck(this,_class);var _this=_possibleConstructorReturn(this,(_class.__proto__||Object.getPrototypeOf(_class)).call(this,
props,context));_this.



































































handlePanResponderRelease=function(){var
onPanEnd=_this.props.onPanEnd;
_this.lastX=_this.absoluteChangeX;
_this.lastY=_this.absoluteChangeY;
onPanEnd&&onPanEnd();
};_this.lastX=0;_this.lastY=0;_this.absoluteChangeY=0;_this.absoluteChangeX=0;_this.state=initialState;return _this;}_createClass(_class,[{key:'componentWillReceiveProps',value:function componentWillReceiveProps(nextProps){if(nextProps.resetPan){this.lastX=0;this.lastY=0;this.absoluteChangeY=0;this.absoluteChangeX=0;if(setGestureState){this.setState(initialState);}}}},{key:'componentWillMount',value:function componentWillMount(){var _this2=this;this.panResponder=_reactNative.PanResponder.create({onStartShouldSetPanResponder:function onStartShouldSetPanResponder(_ref2,_ref3){var touches=_ref2.nativeEvent.touches;var x0=_ref3.x0,y0=_ref3.y0;var shouldSet=touches.length===1;if(shouldSet){var onPanBegin=_this2.props.onPanBegin;onPanBegin&&onPanBegin({originX:x0,originY:y0});}return shouldSet;},onMoveShouldSetPanResponder:function onMoveShouldSetPanResponder(_ref4){var touches=_ref4.nativeEvent.touches;return touches.length===1;},onPanResponderMove:function onPanResponderMove(evt,_ref5){var dx=_ref5.dx,dy=_ref5.dy;var onPan=_this2.props.onPan;var panState={absoluteChangeX:_this2.lastX+dx,absoluteChangeY:_this2.lastY+dy,changeX:dx,changeY:dy};onPan&&onPan(panState);_this2.absoluteChangeX=panState.absoluteChangeX;_this2.absoluteChangeY=panState.absoluteChangeY;if(setGestureState){_this2.setState(panState);}},onPanResponderTerminationRequest:function onPanResponderTerminationRequest(){return true;},onPanResponderTerminate:this.handlePanResponderRelease,onPanResponderRelease:this.handlePanResponderRelease});}},{key:'render',value:function render()

{var _props=







this.props,onPanBegin=_props.onPanBegin,onPan=_props.onPan,onPanEnd=_props.onPanEnd,resetPan=_props.resetPan,panDecoratorStyle=_props.panDecoratorStyle,props=_objectWithoutProperties(_props,['onPanBegin','onPan','onPanEnd','resetPan','panDecoratorStyle']);

var style=_extends({},
panDecoratorStyle,{
alignSelf:'flex-start'});


return(
_react2.default.createElement(_reactNative.Animated.View,_extends({},this.panResponder.panHandlers,{style:style,__source:{fileName:_jsxFileName,lineNumber:120}}),
_react2.default.createElement(BaseComponent,_extends({},props,this.state,{__source:{fileName:_jsxFileName,lineNumber:121}}))));


}}]);return _class;}(_react.Component),_class.propTypes=propTypes,_temp;

};};