'use strict'

// Core modules
const express = require('express');
const path = require('path');

// NPM modules
const { errorHandler, viewEngine, middlewares, routes, processErrorHandler } = require('../app_startup');
const app = require('../app');

describe('integrity of app startup', () => {

  it('ensures express app is intiated correctly', () => {
    expect(Object.getPrototypeOf(app) === Object.getPrototypeOf(express));
  });

  it('starts all middlewares correctly', () => {
    expect(middlewares(app));
  });

  it('sets view engine correctly', () => {
    expect(viewEngine(app));
    expect(app.get('views')).toBe(path.join(process.cwd(), 'views'));
    expect(app.get('view engine')).toBe('ejs');
  });

  it('sets routes correctly', () => {
    expect(routes(app));
  });

  it('setup errorhandling system correctly', () => {
    expect(errorHandler(app));
    expect(processErrorHandler());
    expect(process.listeners('uncaughtException').length > 0).toBeTruthy;
    expect(process.listeners('unhandledRejection').length > 0).toBeTruthy;
  });

});