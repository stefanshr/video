import React, {Component} from 'react';
import {
    Player,
    ControlBar,
    ReplayControl,
    ForwardControl,
    CurrentTimeDisplay,
    TimeDivider,
    PlaybackRateMenuButton,
    VolumeMenuButton
} from 'video-react';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <link
                        rel="stylesheet"
                        href="https://video-react.github.io/assets/video-react.css"
                    />
                </header>
                <body>
                <Player poster="/assets/poster.png">
                    <source src="http://cloud.stefanhohl.ch/s/piqRqyaDDCa4RgB/download/iprechnentutorial.mp4"/>


                    <ControlBar>
                        <ReplayControl seconds={10} order={1.1}/>
                        <ForwardControl seconds={30} order={1.2}/>
                        <CurrentTimeDisplay order={4.1}/>
                        <TimeDivider order={4.2}/>
                        <PlaybackRateMenuButton rates={[5, 2, 1, 0.5, 0.1]} order={7.1}/>
                        <VolumeMenuButton disabled/>
                    </ControlBar>
                </Player>
                </body>
            </div>
        );
    }
}

export default App;
