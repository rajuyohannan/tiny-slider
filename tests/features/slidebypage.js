import { expect } from 'chai';
import { Selector } from 'testcafe';
import { ClientFunction } from 'testcafe';
import { address, speed1, gutter, edgePadding, windowWidthes, windowHeight, tabindex, select, getWindowInnerWidth } from './setting.js';

fixture `slideByPage`
  .page(address);

test('slideByPage: init', async t => {
  await t
    .click('.slideByPage_wrapper [data-controls="next"]')
    .wait(speed1);

  // check sliders position
  var innerWidth = await getWindowInnerWidth();
  var container = await select('#slideByPage');
  var slide14 = await container.getChildElement(14);
  var slide17 = await container.getChildElement(17);
  expect(Math.round(slide14.boundingClientRect.left)).to.equal(0);
  expect(Math.round(slide17.boundingClientRect.right)).to.equal(innerWidth);
  
  await t
    .click('.slideByPage_wrapper [data-controls="next"]')
    .wait(speed1);

  var slide8 = await container.getChildElement(8);
  var slide11 = await container.getChildElement(11);
  expect(Math.round(slide8.boundingClientRect.left)).to.equal(0);
  expect(Math.round(slide11.boundingClientRect.right)).to.equal(innerWidth);

  await t
    .click('.slideByPage_wrapper [data-controls="next"]')
    .wait(speed1);

  var slide12 = await container.getChildElement(12);
  var slide15 = await container.getChildElement(15);
  expect(Math.round(slide12.boundingClientRect.left)).to.equal(0);
  expect(Math.round(slide15.boundingClientRect.right)).to.equal(innerWidth);

  await t
    .click('.slideByPage_wrapper [data-controls="next"]')
    .wait(speed1);

  var slide16 = await container.getChildElement(16);
  var slide19 = await container.getChildElement(19);
  expect(Math.round(slide16.boundingClientRect.left)).to.equal(0);
  expect(Math.round(slide19.boundingClientRect.right)).to.equal(innerWidth);

  await t
    .click('.slideByPage_wrapper [data-controls="next"]')
    .wait(speed1);

  var slide5 = await container.getChildElement(5);
  var slide8 = await container.getChildElement(8);
  expect(Math.round(slide5.boundingClientRect.left)).to.equal(0);
  expect(Math.round(slide8.boundingClientRect.right)).to.equal(innerWidth);

});
