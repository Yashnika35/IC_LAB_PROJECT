// rfce

import React from "react";

function Destination() {
  return (
    <div class="dropdown">
      <button
        class="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Destination
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li>
          <a class="dropdown-item" href="#">
            Destination place:
          </a>
        </li>
        <li>
          <a class="dropdown-item" href="#">
          Address: 123 Main Street, Cityville, Countryland
Location: Latitude: 40.7128, Longitude: -74.0060
Contact: Phone: +1 123-456-7890, Email: info@wanderlustadventures.com

Agency: Explore World Travel
Address: 456 Park Avenue, Townsville, Scenicland
Location: Latitude: 34.0522, Longitude: -118.2437
Contact: Phone: +1 987-654-3210, Email: info@exploreworldtravel.com

Agency: Global Escapes
Address: 789 Ocean Road, Beachville, Islandia
Location: Latitude: 25.7617, Longitude: -80.1918
Contact: Phone: +1 555-123-4567, Email: info@globalescapes.com

Agency: Journey Seekers
Address: 987 Mountain View Drive, Adventuretown, Outdoorsia
Location: Latitude: 51.5074, Longitude: -0.1278
Contact: Phone: +44 20-1234-5678, Email: info@journeyseekers.com

Agency: Dream Destinations
Address: 321 Sunset Boulevard, Dreamville, Wanderlustia
Location: Latitude: -33.8651, Longitude: 151.2099
Contact: Phone: +61 2-9876-5432, Email: info@dreamdestinations.com
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Destination;
