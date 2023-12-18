// Here, am going to declare the general limits and points.

function speedDetector(speed) {
    const maxSpeed = 70;
    const speedPerDemerit = 5;
    const maxDemerit = 12;
  
    // Now am going to create the arguments.
    if (speed <= maxSpeed) {
      console.log("Ok");
    } else {
      // And here, I code the arguments on how to calculate the demerit points.
      const demeritPoints = Math.floor((speed - maxSpeed) / speedPerDemerit);
  
      if (demeritPoints >= maxDemerit) {
        console.log("License suspended.");
      } else {
        console.log("Points: " + demeritPoints);
      }
    }
  }
  
  // Example usage:
  speedDetector(130);
  