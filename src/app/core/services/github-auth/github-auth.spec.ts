import { TestBed } from '@angular/core/testing';
import { GithubAuth } from './github-auth';

describe('GithubAuth', () => {
  let service: GithubAuth;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GithubAuth);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
