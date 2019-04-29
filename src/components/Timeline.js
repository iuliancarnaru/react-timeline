import React from "react";
import TimelineItem from "./TimelineItem";

const timelineData = [
  {
    text:
      "Compellingly whiteboard wireless products before interoperable interfaces. Credibly visualize quality imperatives for reliable ROI. ",
    date: "March 03 2017",
    category: {
      tag: "medium",
      color: "#018f69"
    },
    link: {
      url: "https://medium.com/",
      text: "Read more"
    }
  },
  {
    text:
      "Authoritatively brand process-centric ideas rather than client-focused e-markets. Compellingly redefine integrated systems after intuitive ROI.",
    date: "May 05 2017",
    category: {
      tag: "blog",
      color: "#f4c542"
    },
    link: {
      url: "https://medium.com/",
      text: "Read more"
    }
  }
];

const Timeline = () =>
  timelineData.length > 0 && (
    <div className="timeline-container">
      {timelineData.map((data, idx) => (
        <TimelineItem data={data} key={idx} />
      ))}
    </div>
  );

export default Timeline;
