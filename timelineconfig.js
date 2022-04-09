 var timelineConfig = {
   timelineConstructor: function (div, eventSource) {
      div.style.height="400px";
      //div.style.bottom = "0px";
      div.style.width="100%";
      //div.style.fontSize = "16pt";
      var theme = Timeline.ClassicTheme.create();
      theme.event.track.height = 1;
      theme.event.track.gap = 1;
      theme.event.bubble.width = 500;
      //theme.event.bubble.height = 400;

      var bandInfos = [
      Timeline.createBandInfo({
         width:          "80%",
         intervalUnit: Timeline.DateTime.DECADE,
         intervalPixels: 200,
         eventSource:    eventSource,
         theme: theme
         }),
      Timeline.createBandInfo({
         width:          "20%",
         intervalUnit: Timeline.DateTime.CENTURY,
         intervalPixels: 200,
         eventSource:    eventSource,
         overview: true,
         theme: theme
         })
      ];
      bandInfos[1].syncWith = 0;
      bandInfos[1].highlight = true;

      //bandInfos[1].eventPainter.setLayout(bandInfos[0].eventPainter.getLayout());

      tl = Timeline.create(div, bandInfos, Timeline.HORIZONTAL);
      return tl;
   }
}