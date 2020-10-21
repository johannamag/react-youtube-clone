import React from "react";
import "./SearchResults.css";
import TuneIcon from "@material-ui/icons/Tune";
import Channel from "./Channel";
import VideoRow from "./VideoRow";

function SearchResults() {
  return (
    <div className="searchResults">
      <div className="searchResults__filter">
        <TuneIcon />
        <h2>Filter</h2>
      </div>
      <hr />
      <Channel
        image="https://i.pinimg.com/474x/49/f2/84/49f2848b0d37312bc852d8638434f506.jpg"
        channel="Jane Doe"
        verified
        subs="657K"
        numbVideos={1265}
        description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea"
      />
      <hr />
      <VideoRow
        views="1.4M"
        subs="789K"
        description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam"
        channel="John Doe"
        timestamp="2 months ago"
        title="We are all in this together"
        image="https://pub-static.haozhaopian.net/assets/projects/pages/5ab0e6a0-51fd-11ea-a8ba-232c136749ac_0aedcaed-11be-4b54-94a4-dc056f4e8dcf_thumb.jpg"
      />
      <VideoRow
        views="1.4M"
        subs="789K"
        description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam"
        channel="John Doe"
        timestamp="2 months ago"
        title="We are all in this together"
        image="https://pub-static.haozhaopian.net/assets/projects/pages/5ab0e6a0-51fd-11ea-a8ba-232c136749ac_0aedcaed-11be-4b54-94a4-dc056f4e8dcf_thumb.jpg"
      />
      <VideoRow
        views="1.4M"
        subs="789K"
        description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam"
        channel="John Doe"
        timestamp="2 months ago"
        title="We are all in this together"
        image="https://pub-static.haozhaopian.net/assets/projects/pages/5ab0e6a0-51fd-11ea-a8ba-232c136749ac_0aedcaed-11be-4b54-94a4-dc056f4e8dcf_thumb.jpg"
      />
      <VideoRow
        views="1.4M"
        subs="789K"
        description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam"
        channel="John Doe"
        timestamp="2 months ago"
        title="We are all in this together"
        image="https://pub-static.haozhaopian.net/assets/projects/pages/5ab0e6a0-51fd-11ea-a8ba-232c136749ac_0aedcaed-11be-4b54-94a4-dc056f4e8dcf_thumb.jpg"
      />
      <VideoRow
        views="1.4M"
        subs="789K"
        description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam"
        channel="John Doe"
        timestamp="2 months ago"
        title="We are all in this together"
        image="https://pub-static.haozhaopian.net/assets/projects/pages/5ab0e6a0-51fd-11ea-a8ba-232c136749ac_0aedcaed-11be-4b54-94a4-dc056f4e8dcf_thumb.jpg"
      />
      <VideoRow
        views="1.4M"
        subs="789K"
        description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam"
        channel="John Doe"
        timestamp="2 months ago"
        title="We are all in this together"
        image="https://pub-static.haozhaopian.net/assets/projects/pages/5ab0e6a0-51fd-11ea-a8ba-232c136749ac_0aedcaed-11be-4b54-94a4-dc056f4e8dcf_thumb.jpg"
      />
      <VideoRow
        views="1.4M"
        subs="789K"
        description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam"
        channel="John Doe"
        timestamp="2 months ago"
        title="We are all in this together"
        image="https://pub-static.haozhaopian.net/assets/projects/pages/5ab0e6a0-51fd-11ea-a8ba-232c136749ac_0aedcaed-11be-4b54-94a4-dc056f4e8dcf_thumb.jpg"
      />
    </div>
  );
}

export default SearchResults;
