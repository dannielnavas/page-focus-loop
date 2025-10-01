import { Component } from '@angular/core';

@Component({
  selector: 'app-stats',
  imports: [],
  template: `
    <section class="py-24 px-4 sm:px-6 lg:px-8">
      <div class="container mx-auto max-w-7xl">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="text-5xl font-bold gradient-text mb-2">50K+</div>
            <div class="text-gray-400">Active Users</div>
          </div>
          <div class="text-center">
            <div class="text-5xl font-bold gradient-text mb-2">1M+</div>
            <div class="text-gray-400">Focus Sessions</div>
          </div>
          <div class="text-center">
            <div class="text-5xl font-bold gradient-text mb-2">95%</div>
            <div class="text-gray-400">Satisfaction Rate</div>
          </div>
          <div class="text-center">
            <div class="text-5xl font-bold gradient-text mb-2">4.9</div>
            <div class="text-gray-400">App Store Rating</div>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrl: './stats.scss',
})
export class Stats {}
