const request = require('supertest');
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const app = require('../server'); // make sure this exports your Express app
const Book = require('../models/Book');

let mongoServer;

// 🔌 Setup before all tests run
beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();

  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

// 🔄 Clean up after each test
afterEach(async () => {
  await Book.deleteMany();
});

// 🧹 Cleanup after all tests
afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

describe('Book API', () => {
  it('should create a new book', async () => {
    const res = await request(app)
      .post('/api/books')
      .send({ title: 'The Hobbit', author: 'J.R.R. Tolkien' });

    expect(res.statusCode).toBe(201);
    expect(res.body.title).toBe('The Hobbit');
  });
});