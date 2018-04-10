import { module, test } from 'qunit';
import { visit, currentURL, click, render } from '@ember/test-helpers';
import { setupApplicationTest, setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precombile';

module('Acceptance | list rentals', function(hooks) {
  setupApplicationTest(hooks);

  test('should show rentals as home page',async function(assert){
    await visit('/');
    assert.equal(currentURL(),'/rentals','should redirect automatically');
  });

  test('should link to the about page',async function(assert){
    await visit('/');
    await click('.menu-about');
    assert.equal(currentURL(),'/about','should navigate to about');
  });

  test('should link to the contact page',async function(assert){
    await visit('/');
    await click('.menu-contact');
    assert.equal(currentURL(),'/contact','should navigate to contact');
  });

  test('should show list of available rentals',async function(assert){
    await visit('/');
    assert.equal(this.element.querySelectorAll('.listing').length,3,'should display 3 listings');
  });

  test('should filter list of rentals by city',async function(assert){

  });

  test('should show details for a selected rental',async function(assert){

  });

  test('visiting /', async function(assert) {
    await visit('/');
    assert.equal(currentURL(), '/');
  });
});