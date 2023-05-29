import { Injectable } from '@angular/core';
import { FeatureConfig } from '../interfaces/feature-flag';

@Injectable({
  providedIn: 'root',
})
export class FeatureFlagsService {
  config: FeatureConfig | null = null;
  responseConfig = {blog: true, feed: true, newsletter: true};

  loadConfig() {
    this.config = this.responseConfig;
    return this.responseConfig;
  }

  isFeatureEnabled(key: string): boolean {
    // return this.config && this.config[key] ? this.config[key] : false;
    return this.config?.[key] ?? false;
  }
}
