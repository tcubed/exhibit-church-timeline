var tl;
function onLoad(xmlfn) {
  var eventSource = new Timeline.DefaultEventSource();

  var d = Timeline.DateTime.parseGregorianDateTime("20");
  var bandInfos = [
    Timeline.createBandInfo({
	eventSource:    eventSource,
        date:           d,
        width:          "70%", 
        intervalUnit:   Timeline.DateTime.DECADE, 
        intervalPixels: 200
    }),
    Timeline.createBandInfo({
   	showEventText:  false,
        trackHeight:    0.5,
        trackGap:       0.2,
	eventSource:    eventSource,
        date:           d,
        width:          "30%", 
        intervalUnit:   Timeline.DateTime.DECADE, 
        intervalPixels: 40
    })
  ];
  bandInfos[1].syncWith = 0;
  bandInfos[1].highlight = true;
  bandInfos[1].eventPainter.setLayout(bandInfos[0].eventPainter.getLayout());

  tl = Timeline.create(document.getElementById("bible_timeline"), bandInfos);
  //xmlfn=document.getElementById("seltl").value;
  var x=document.getElementById("seltl");
  xmlfn=x.options[x.selectedIndex].value;

  Timeline.loadXML(xmlfn, function(xml, url) { eventSource.loadXML(xml, url); });
}

var resizeTimerID = null;
function onResize() {
    if (resizeTimerID == null) {
        resizeTimerID = window.setTimeout(function() {
            resizeTimerID = null;
            tl.layout();
        }, 500);
    }
}