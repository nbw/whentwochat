/*
  Calculates which times overlap based on utcOffset timezone data
*/

/*
  Calculates the timezone offset against the base zone
*/
export const relativeOffset = (baseOffset, localOffSet) => {
 return Math.floor((localOffSet - baseOffset)/60);
}

/* 
  Returns an array filled with 1's between the start and end time
*/
export const buildSchedule = (startTime, endTime) => {
  let schedule = new Array(24).fill(0);

  if (endTime < startTime) {
    endTime += 24;
  }

  let i;
  for(i = startTime; i < endTime; i++) {
    schedule[i%24] = 1;
  }
  return schedule;
}

/*
  Rotates an array. Positive k rotates forward, negative backward
*/
export const rotateSchedule = (schedule, k) => {
  return schedule.slice(k).concat(schedule.slice(0, k));
}

/*
  Combines buildSchedule and rotateSchedule
*/
export const buildRotatedSchedule = (startTime, endTime, k) => {
  return rotateSchedule(buildSchedule(startTime, endTime), -1*k)
}