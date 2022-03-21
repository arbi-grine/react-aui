import Tabs from "./components/tabs";

const App: React.FC = () => {
  return (
    <Tabs selected={0}>
      <div className="tab-content">
        <Tabs.TabPanel>
          <Tabs selected={0}>
            <ul className="nav nav-tabs" role="tablist">
              <li className="nav-item" role="presentation">
                <Tabs.Tab>
                  {({ onSelect, isActive }) => {
                    return (
                      <button
                        className={`nav-link ${isActive && "active"}`}
                        type="button"
                        role="tab"
                        onClick={onSelect}
                      >
                        Tab1
                      </button>
                    );
                  }}
                </Tabs.Tab>
              </li>
              <li className="nav-item" role="presentation">
                <Tabs.Tab>
                  {({ onSelect, isActive }) => {
                    return (
                      <button
                        className={`nav-link ${isActive && "active"}`}
                        type="button"
                        role="tab"
                        onClick={onSelect}
                      >
                        Tab2
                      </button>
                    );
                  }}
                </Tabs.Tab>
              </li>
              <li className="nav-item" role="presentation">
                <Tabs.Tab>
                  {({ onSelect, isActive }) => {
                    return (
                      <button
                        className={`nav-link ${isActive && "active"}`}
                        type="button"
                        role="tab"
                        onClick={onSelect}
                      >
                        Tab3
                      </button>
                    );
                  }}
                </Tabs.Tab>
              </li>
            </ul>
            <div className="tab-content">
              <Tabs.TabPanel>
                <div
                  className="tab-pane fade show active"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <Tabs selected={0}>
                    <ul className="nav nav-tabs" role="tablist">
                      <li className="nav-item" role="presentation">
                        <Tabs.Tab>
                          {({ onSelect, isActive }) => {
                            return (
                              <button
                                className={`nav-link ${isActive && "active"}`}
                                type="button"
                                role="tab"
                                onClick={onSelect}
                              >
                                Tab1
                              </button>
                            );
                          }}
                        </Tabs.Tab>
                      </li>
                      <li className="nav-item" role="presentation">
                        <Tabs.Tab>
                          {({ onSelect, isActive }) => {
                            return (
                              <button
                                className={`nav-link ${isActive && "active"}`}
                                type="button"
                                role="tab"
                                onClick={onSelect}
                              >
                                Tab2
                              </button>
                            );
                          }}
                        </Tabs.Tab>
                      </li>
                      <li className="nav-item" role="presentation">
                        <Tabs.Tab>
                          {({ onSelect, isActive }) => {
                            return (
                              <button
                                className={`nav-link ${isActive && "active"}`}
                                type="button"
                                role="tab"
                                onClick={onSelect}
                              >
                                Tab3
                              </button>
                            );
                          }}
                        </Tabs.Tab>
                      </li>
                    </ul>
                    <div className="tab-content">
                      <Tabs.TabPanel>
                        <div
                          className="tab-pane fade show active"
                          role="tabpanel"
                          aria-labelledby="home-tab"
                        >
                          Tab 1 description
                        </div>
                      </Tabs.TabPanel>
                      <Tabs.TabPanel>
                        <div
                          className="tab-pane fade show active"
                          role="tabpanel"
                          aria-labelledby="home-tab"
                        >
                          Tab 2 description
                        </div>
                      </Tabs.TabPanel>
                      <Tabs.TabPanel>
                        <div
                          className="tab-pane fade show active"
                          role="tabpanel"
                          aria-labelledby="home-tab"
                        >
                          <Tabs selected={0}>
                            <ul className="nav nav-tabs" role="tablist">
                              <li className="nav-item" role="presentation">
                                <Tabs.Tab>
                                  {({ onSelect, isActive }) => {
                                    return (
                                      <button
                                        className={`nav-link ${
                                          isActive && "active"
                                        }`}
                                        type="button"
                                        role="tab"
                                        onClick={onSelect}
                                      >
                                        Tab1
                                      </button>
                                    );
                                  }}
                                </Tabs.Tab>
                              </li>
                              <li className="nav-item" role="presentation">
                                <Tabs.Tab>
                                  {({ onSelect, isActive }) => {
                                    return (
                                      <button
                                        className={`nav-link ${
                                          isActive && "active"
                                        }`}
                                        type="button"
                                        role="tab"
                                        onClick={onSelect}
                                      >
                                        Tab2
                                      </button>
                                    );
                                  }}
                                </Tabs.Tab>
                              </li>
                              <li className="nav-item" role="presentation">
                                <Tabs.Tab>
                                  {({ onSelect, isActive }) => {
                                    return (
                                      <button
                                        className={`nav-link ${
                                          isActive && "active"
                                        }`}
                                        type="button"
                                        role="tab"
                                        onClick={onSelect}
                                      >
                                        Tab3
                                      </button>
                                    );
                                  }}
                                </Tabs.Tab>
                              </li>
                            </ul>
                            <div className="tab-content">
                              <Tabs.TabPanel>
                                <div
                                  className="tab-pane fade show active"
                                  role="tabpanel"
                                  aria-labelledby="home-tab"
                                >
                                  Tab 1 description
                                </div>
                              </Tabs.TabPanel>
                              <Tabs.TabPanel>
                                <div
                                  className="tab-pane fade show active"
                                  role="tabpanel"
                                  aria-labelledby="home-tab"
                                >
                                  Tab 2 description
                                </div>
                              </Tabs.TabPanel>
                              <Tabs.TabPanel>
                                <div
                                  className="tab-pane fade show active"
                                  role="tabpanel"
                                  aria-labelledby="home-tab"
                                >
                                  Tab 3 description
                                </div>
                              </Tabs.TabPanel>
                            </div>
                          </Tabs>
                        </div>
                      </Tabs.TabPanel>
                    </div>
                  </Tabs>
                </div>
              </Tabs.TabPanel>
              <Tabs.TabPanel>
                <div
                  className="tab-pane fade show active"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  Tab 2 description
                </div>
              </Tabs.TabPanel>
              <Tabs.TabPanel>
                <div
                  className="tab-pane fade show active"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  Tab 3 description
                </div>
              </Tabs.TabPanel>
            </div>
          </Tabs>
        </Tabs.TabPanel>
        <Tabs.TabPanel>Tab 2 description sss</Tabs.TabPanel>
        <Tabs.TabPanel>Tab 3 description</Tabs.TabPanel>
      </div>
      <ul className="nav nav-tabs" role="tablist">
        <li className="nav-item" role="presentation">
          <Tabs.Tab>
            {({ onSelect, isActive }) => {
              return (
                <button
                  className={`nav-link ${isActive && "active"}`}
                  type="button"
                  role="tab"
                  onClick={onSelect}
                >
                  Tab1
                </button>
              );
            }}
          </Tabs.Tab>
        </li>
        <li className="nav-item" role="presentation">
          <Tabs.Tab>
            {({ onSelect, isActive }) => {
              return (
                <button
                  className={`nav-link ${isActive && "active"}`}
                  type="button"
                  role="tab"
                  onClick={onSelect}
                >
                  Tab2
                </button>
              );
            }}
          </Tabs.Tab>
        </li>
        <li className="nav-item" role="presentation">
          <Tabs.Tab>
            {({ onSelect, isActive }) => {
              return (
                <button
                  className={`nav-link ${isActive && "active"}`}
                  type="button"
                  role="tab"
                  onClick={onSelect}
                >
                  Tab3
                </button>
              );
            }}
          </Tabs.Tab>
        </li>
      </ul>
    </Tabs>
  );
};

export default App;
