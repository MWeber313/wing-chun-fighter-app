import React from "react";
import {Outlet, Link} from 'react-router-dom';

function Root() {
    return (
        <>
          <div id="navigation">
            <h1>Wing Chun App</h1>
            <nav>
              <ul>
                <li>
                  <Link to={`/endurance`}>Endurance</Link>
                </li>
                <li>
                  <Link to={`/targeted`}>Target Challenge</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div id="displayContent">
            <Outlet />
          </div>
        </>
      );
}

export default Root;