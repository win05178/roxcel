import { WinModule } from './win.module';

describe('WinModule', () => {
  let winModule: WinModule;

  beforeEach(() => {
    winModule = new WinModule();
  });

  it('should create an instance', () => {
    expect(winModule).toBeTruthy();
  });
});
