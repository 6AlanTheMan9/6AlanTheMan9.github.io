gdjs.NewSceneCode = {};
gdjs.NewSceneCode.forEachIndex2 = 0;

gdjs.NewSceneCode.forEachObjects2 = [];

gdjs.NewSceneCode.forEachTemporary2 = null;

gdjs.NewSceneCode.forEachTotalCount2 = 0;

gdjs.NewSceneCode.GDtimeObjects1= [];
gdjs.NewSceneCode.GDtimeObjects2= [];
gdjs.NewSceneCode.GDtimeObjects3= [];
gdjs.NewSceneCode.GDmessageObjects1= [];
gdjs.NewSceneCode.GDmessageObjects2= [];
gdjs.NewSceneCode.GDmessageObjects3= [];

gdjs.NewSceneCode.conditionTrue_0 = {val:false};
gdjs.NewSceneCode.condition0IsTrue_0 = {val:false};
gdjs.NewSceneCode.condition1IsTrue_0 = {val:false};
gdjs.NewSceneCode.conditionTrue_1 = {val:false};
gdjs.NewSceneCode.condition0IsTrue_1 = {val:false};
gdjs.NewSceneCode.condition1IsTrue_1 = {val:false};


gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDtimeObjects2Objects = Hashtable.newFrom({"time": gdjs.NewSceneCode.GDtimeObjects2});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDtimeObjects2Objects = Hashtable.newFrom({"time": gdjs.NewSceneCode.GDtimeObjects2});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDtimeObjects1Objects = Hashtable.newFrom({"time": gdjs.NewSceneCode.GDtimeObjects1});gdjs.NewSceneCode.eventsList0x655418 = function(runtimeScene, context) {

{

gdjs.NewSceneCode.GDtimeObjects2.createFrom(runtimeScene.getObjects("time"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
{gdjs.NewSceneCode.conditionTrue_1 = gdjs.NewSceneCode.condition0IsTrue_0;
gdjs.NewSceneCode.condition0IsTrue_1.val = true;
{
gdjs.NewSceneCode.condition0IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDtimeObjects2Objects, runtimeScene, true, false);
}gdjs.NewSceneCode.conditionTrue_1.val = !gdjs.NewSceneCode.condition0IsTrue_1.val;
}
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDtimeObjects2 */
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDtimeObjects2Objects, gdjs.evtTools.input.getMouseX(runtimeScene, "", 0), gdjs.evtTools.input.getMouseY(runtimeScene, "", 0), "");
}{for(var i = 0, len = gdjs.NewSceneCode.GDtimeObjects2.length ;i < len;++i) {
    gdjs.NewSceneCode.GDtimeObjects2[i].returnVariable(gdjs.NewSceneCode.GDtimeObjects2[i].getVariables().get("timer")).setNumber(0);
}
}}

}


{

gdjs.NewSceneCode.GDtimeObjects1.createFrom(runtimeScene.getObjects("time"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDtimeObjects1Objects, runtimeScene, true, false);
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDtimeObjects1 */
{for(var i = 0, len = gdjs.NewSceneCode.GDtimeObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDtimeObjects1[i].returnVariable(gdjs.NewSceneCode.GDtimeObjects1[i].getVariables().get("timer")).setNumber(0);
}
}}

}


}; //End of gdjs.NewSceneCode.eventsList0x655418
gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDtimeObjects1Objects = Hashtable.newFrom({"time": gdjs.NewSceneCode.GDtimeObjects1});gdjs.NewSceneCode.eventsList0x654788 = function(runtimeScene, context) {

}; //End of gdjs.NewSceneCode.eventsList0x654788
gdjs.NewSceneCode.eventsList0x654650 = function(runtimeScene, context) {

{

/* Reuse gdjs.NewSceneCode.GDtimeObjects1 */

for(gdjs.NewSceneCode.forEachIndex2 = 0;gdjs.NewSceneCode.forEachIndex2 < gdjs.NewSceneCode.GDtimeObjects1.length;++gdjs.NewSceneCode.forEachIndex2) {
gdjs.NewSceneCode.GDtimeObjects2.createFrom(gdjs.NewSceneCode.GDtimeObjects1);


gdjs.NewSceneCode.forEachTemporary2 = gdjs.NewSceneCode.GDtimeObjects1[gdjs.NewSceneCode.forEachIndex2];
gdjs.NewSceneCode.GDtimeObjects2.length = 0;
gdjs.NewSceneCode.GDtimeObjects2.push(gdjs.NewSceneCode.forEachTemporary2);
if (true) {
{for(var i = 0, len = gdjs.NewSceneCode.GDtimeObjects2.length ;i < len;++i) {
    gdjs.NewSceneCode.GDtimeObjects2[i].returnVariable(gdjs.NewSceneCode.GDtimeObjects2[i].getVariables().get("timer")).add(gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDtimeObjects2.length ;i < len;++i) {
    gdjs.NewSceneCode.GDtimeObjects2[i].setString("Timer: " + gdjs.evtTools.common.toString(Math.floor((gdjs.RuntimeObject.getVariableNumber(gdjs.NewSceneCode.GDtimeObjects2[i].getVariables().get("timer"))))) + "s");
}
}}
}

}


}; //End of gdjs.NewSceneCode.eventsList0x654650
gdjs.NewSceneCode.eventsList0xac780 = function(runtimeScene, context) {

{



}


{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.NewSceneCode.eventsList0x655418(runtimeScene, context);} //End of subevents
}

}


{



}


{

gdjs.NewSceneCode.GDtimeObjects1.createFrom(runtimeScene.getObjects("time"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.pickedObjectsCount(gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDtimeObjects1Objects) > 0;
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.NewSceneCode.eventsList0x654650(runtimeScene, context);} //End of subevents
}

}


}; //End of gdjs.NewSceneCode.eventsList0xac780


gdjs.NewSceneCode.func = function(runtimeScene, context) {
context.startNewFrame();
gdjs.NewSceneCode.GDtimeObjects1.length = 0;
gdjs.NewSceneCode.GDtimeObjects2.length = 0;
gdjs.NewSceneCode.GDtimeObjects3.length = 0;
gdjs.NewSceneCode.GDmessageObjects1.length = 0;
gdjs.NewSceneCode.GDmessageObjects2.length = 0;
gdjs.NewSceneCode.GDmessageObjects3.length = 0;

gdjs.NewSceneCode.eventsList0xac780(runtimeScene, context);return;
}
gdjs['NewSceneCode']= gdjs.NewSceneCode;
