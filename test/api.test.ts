// __tests__/api.test.ts
import supertest from 'supertest';
import app from '../src/index';

const request = supertest(app);

describe('API Endpoints', () => {
  let createdProductId: number;

  // Test GET /api/products
  it('should get a list of products', async () => {
    const response = await request.get('/api/products');
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
  });

  // Test POST /api/products
  it('should create a new product', async () => {
    const newProduct = { name: 'Test Product', price: 9.99 };

    const response = await request.post('/api/products').send(newProduct);
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
    createdProductId = response.body.id;
  });

  // Test GET /api/products/:id
  it('should get details of a specific product by ID', async () => {
    const response = await request.get(`/api/products/${createdProductId}`);
    expect(response.status).toBe(200);
    expect(response.body.id).toBe(createdProductId);
  });

  // Cleanup: DELETE the product created in the test
  afterAll(async () => {
    if (createdProductId) {
      await request.delete(`/api/products/${createdProductId}`);
    }
  });
});
