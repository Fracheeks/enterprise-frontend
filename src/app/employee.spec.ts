import { employee } from './employee';

describe('Employee', () => {
  it('should create an instance', () => {
    expect(new employee()).toBeTruthy();
  });
});
