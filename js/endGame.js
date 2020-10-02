'use strict';

var CLOUD_WIDTH = 500;
var CLOUD_HEIGHT = 240;
var CLOUD_DOWN = 10;
var CLOUD_LEFT = 15;
var CLOUD_X = 100;
var CLOUD_Y = 50;
var GAP = 10;
var TEXT_GAP = 15;
var STATISTIC_X = 150;
var STATISTIC_Y = 260;
var BAR_DOWN = 60;
var barWidth = 90;
var barHeight = CLOUD_HEIGHT - 30;
console.log(barHeight);


var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + (CLOUD_WIDTH / 2), y + CLOUD_DOWN);
  ctx.lineTo(x + CLOUD_WIDTH, y);
  ctx.lineTo((x + CLOUD_WIDTH) - CLOUD_LEFT, y + (CLOUD_HEIGHT / 2));
  ctx.lineTo(x + CLOUD_WIDTH, y + CLOUD_HEIGHT);
  ctx.lineTo(x + (CLOUD_WIDTH / 2), y + CLOUD_HEIGHT - CLOUD_DOWN);
  ctx.lineTo(x, y + CLOUD_HEIGHT);
  ctx.lineTo(x + CLOUD_LEFT, y + (CLOUD_HEIGHT / 2));
  ctx.lineTo(x, y);
  ctx.closePath();
  ctx.fill();
};
var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};
window.renderStatistics = function (ctx, players, times) {

  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.3)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  ctx.fillStyle = '#000';
  ctx.font = '28px Arial';
  ctx.fillText("Уровень пройден", 240, 50);
  ctx.font = '16px Arial';
  var maxTime = getMaxElement(times);


  for (var i = 0; i < players.length; i++) {
    if (players[i] === "Вы") {
      ctx.fillStyle = 'blue';
    } else ctx.fillStyle = 'red';
    ctx.fillRect(STATISTIC_X + GAP + (barWidth + GAP) * i, CLOUD_Y + ((STATISTIC_Y - (GAP * 2)) - ((barHeight * times[i]) / maxTime)), barWidth, ((barHeight * times[i]) / maxTime) - BAR_DOWN);
    ctx.fillStyle = '#000';
    ctx.fillText(players[i], STATISTIC_X + GAP + (barWidth + GAP) * i, STATISTIC_Y - GAP);

  }
};