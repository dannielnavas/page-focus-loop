import { Component } from '@angular/core';

@Component({
  selector: 'app-how-it-works',
  imports: [],
  template: `
    <section id="how-it-works" class="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <!-- Decorative gradient -->
      <div
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-full blur-gradient pointer-events-none"
      ></div>

      <div class="container mx-auto max-w-6xl relative z-10">
        <div class="text-center mb-16">
          <h2 class="text-4xl sm:text-5xl font-bold text-white mb-4">How Focus Loop works</h2>
          <p class="text-xl text-gray-400 max-w-2xl mx-auto">
            Three simple steps to transform your productivity
          </p>
        </div>

        <div class="space-y-12">
          <!-- Step 1 -->
          <div class="flex flex-col md:flex-row gap-8 items-start md:items-center">
            <div class="flex-shrink-0">
              <div class="w-20 h-20 rounded-2xl gradient-bg flex items-center justify-center">
                <span class="text-3xl font-bold text-white">01</span>
              </div>
            </div>
            <div class="flex-1">
              <h3 class="text-2xl font-bold text-white mb-3">Set Your Goals</h3>
              <p class="text-lg text-gray-400 leading-relaxed">
                Define what you want to accomplish today, this week, or this month. Break down big
                goals into manageable tasks.
              </p>
            </div>
            <div class="hidden md:block">
              <svg
                class="w-8 h-8 text-pink-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
          </div>

          <!-- Step 2 -->
          <div class="flex flex-col md:flex-row gap-8 items-start md:items-center">
            <div class="flex-shrink-0">
              <div class="w-20 h-20 rounded-2xl gradient-bg flex items-center justify-center">
                <span class="text-3xl font-bold text-white">02</span>
              </div>
            </div>
            <div class="flex-1">
              <h3 class="text-2xl font-bold text-white mb-3">Start a Focus Session</h3>
              <p class="text-lg text-gray-400 leading-relaxed">
                Choose your session length and begin. Focus Loop will guide you through focused work
                periods and strategic breaks.
              </p>
            </div>
            <div class="hidden md:block">
              <svg
                class="w-8 h-8 text-pink-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
          </div>

          <!-- Step 3 -->
          <div class="flex flex-col md:flex-row gap-8 items-start md:items-center">
            <div class="flex-shrink-0">
              <div class="w-20 h-20 rounded-2xl gradient-bg flex items-center justify-center">
                <span class="text-3xl font-bold text-white">03</span>
              </div>
            </div>
            <div class="flex-1">
              <h3 class="text-2xl font-bold text-white mb-3">Track Your Progress</h3>
              <p class="text-lg text-gray-400 leading-relaxed">
                Watch your productivity metrics grow. Celebrate wins and identify patterns to
                continuously improve your focus.
              </p>
            </div>
            <div class="hidden md:block">
              <svg
                class="w-8 h-8 text-pink-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrl: './how-it-works.scss',
})
export class HowItWorks {}
