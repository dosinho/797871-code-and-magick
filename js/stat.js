'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 15;
var BAR_WIDTH = 40;
var GAP_BAR = 50;
var GIS_HEIGHT = 150;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
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
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP * 2, CLOUD_Y + GAP * 2);
  ctx.fillText('Список результатов:', CLOUD_X + GAP * 2, CLOUD_Y + GAP * 2 + 16);
  var maxTime = getMaxElement(times);
  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(players[i], CLOUD_X + GAP_BAR + (GAP_BAR + BAR_WIDTH) * i, CLOUD_Y + CLOUD_HEIGHT - GAP - FONT_GAP);
    ctx.fillText(Math.floor(times[i]), CLOUD_X + GAP_BAR + (GAP_BAR + BAR_WIDTH) * i, CLOUD_Y + GAP * 6 + (CLOUD_HEIGHT - (GAP * 9) - ((GIS_HEIGHT * times[i]) / maxTime) - GAP - FONT_GAP));
    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      ctx.fillRect(CLOUD_X + GAP_BAR + (GAP_BAR + BAR_WIDTH) * i, CLOUD_Y + GAP * 6 + (CLOUD_HEIGHT - (GAP * 7) - ((GIS_HEIGHT * times[i]) / maxTime) - GAP - FONT_GAP), BAR_WIDTH, (GIS_HEIGHT * times[i]) / maxTime);
    } else {
      ctx.fillStyle = 'rgba(0, 0, 255, ' + Math.round(Math.random() * 100) / 100 + ')';
      ctx.fillRect(CLOUD_X + GAP_BAR + (GAP_BAR + BAR_WIDTH) * i, CLOUD_Y + GAP * 6 + (CLOUD_HEIGHT - (GAP * 7) - ((GIS_HEIGHT * times[i]) / maxTime) - GAP - FONT_GAP), BAR_WIDTH, (GIS_HEIGHT * times[i]) / maxTime);
    }
  }
};
