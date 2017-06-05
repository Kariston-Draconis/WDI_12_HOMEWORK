console.log('PT Planner')

var alemein = ['Flinders Street', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn', 'Glenferrie']
var glenWaverly = ['Flagstaff', 'Melbourne Central', 'Parliament', 'Richmond', 'Kooyong', 'Tooronga']
var Sandringham = ['Southern Cross', 'Richmond', 'South Yarra', 'Prahran', 'Windsor']

var origin = prompt('Where are you coming from?');
var destination = prompt('Where are you going?');
var pointA = alemein.indexOf(origin);
var pointB = alemein.indexOf(destination);
var pointC = alemein.reverse().indexOf(origin);
var pointD = alemein.reverse().indexOf(destination);

if (pointB > pointA) {
  var route = alemein.slice(pointA, (pointB + 1));
  var stops = pointB - pointA;
} else if (pointB < pointA) {
  var route = alemein.reverse().slice(pointC, (pointD + 1));
  var stops = pointC - pointD;
}

console.log('Origin: ' + origin)
console.log('Destination: ' + destination)
console.log(route.join(' -----> '))
console.log(stops + ' stops total')
