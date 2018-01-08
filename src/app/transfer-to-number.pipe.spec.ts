import { TransferToNumberPipe } from './transfer-to-number.pipe';

describe('TransferToNumberPipe', () => {
  it('create an instance', () => {
    const pipe = new TransferToNumberPipe();
    expect(pipe).toBeTruthy();
  });
});
