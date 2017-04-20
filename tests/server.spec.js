/*jshint esversion: 6*/
const chai = require('chai');
const expect = chai.expect;
const supertest = require('supertest');
const server = require('../server.js');
const hbs = server.hbs;
const engine = server.engine;
const set = server.set;
const get = server.get;
const listen = server.listen;
