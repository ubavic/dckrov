function App() {
  return (
    <>
      <div id="houses">
        <div id="house1">
          <h1>dc krov</h1>
        </div>
        <div id="house2">
          <Roof />

          <div id="building">
            <div id="antenaContainer">
              <div id="antena"></div>
            </div>
            <TopStory />
            <Story />
          </div>
        </div>
        <div id="house3"></div>
      </div>
    </>
  );
}

const Roof = () => {
  return (
    <div id="roof">
      <div id="roofBg"></div>
      <div id="roofContent">
        <div className="roofWindow"></div>
        <div className="roofWindow"></div>
      </div>
    </div>
  );
};

const TopStory = () => {
  return (
    <>
      <div id="topStory">
        <h2>događaji</h2>
        <div className="windowRow">
          <div className="window">2</div>
          <div className="window"></div>
          <div className="window"></div>
          <div className="window"></div>
        </div>
      </div>
      <div id="storySeparator"></div>
    </>
  );
};

const Story = () => {
  return (
    <div id="story">
      <div className="window">
        <div>
          <span>
            po
            <br />
            zi
            <br />
            vi
          </span>
        </div>
      </div>
      <div className="window">
        <div>
          <span>
            raz
            <br />
            go
            <br />
            vori
          </span>
        </div>
      </div>
      <div className="window">
        <div>
          <span>
            ini
            <br />
            cija
            <br />
            tive
          </span>
        </div>
      </div>
    </div>
  );
};

export default App;
