import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pricing',
  imports: [RouterLink],
  template: `
    <section id="pricing" class="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <!-- Decorative gradient -->
      <div
        class="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-full blur-gradient pointer-events-none"
      ></div>

      <div class="container mx-auto max-w-6xl relative z-10">
        <div class="text-center mb-16">
          <h2 class="text-4xl sm:text-5xl font-bold text-white mb-4">
            Simple, transparent pricing
          </h2>
          <p class="text-xl text-gray-400 max-w-2xl mx-auto">
            Start free, upgrade to unlock AI-powered daily planning
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <!-- Free Plan -->
          <div class="bg-[#222b3d] border border-white/10 p-8 rounded-lg relative">
            <div class="mb-6">
              <h3 class="text-2xl font-bold text-white mb-2">Free</h3>
              <p class="text-gray-400 text-sm">Perfect for getting started</p>
            </div>

            <div class="mb-6">
              <span class="text-5xl font-bold text-white">$0</span>
              <span class="text-gray-400 ml-2">/ forever</span>
            </div>

            <button
              class="w-full mb-8 bg-[#2a3548] hover:bg-[#323d52] text-white px-6 py-3 rounded-lg transition-all cursor-pointer"
              [routerLink]="'/register/free'"
            >
              Get Started Free
            </button>

            <ul class="space-y-3">
              <li class="flex items-start gap-3">
                <svg
                  class="w-5 h-5 text-pink-500 flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span class="text-gray-300">Limited focus sessions</span>
              </li>
              <li class="flex items-start gap-3">
                <svg
                  class="w-5 h-5 text-pink-500 flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span class="text-gray-300">Basic goal tracking</span>
              </li>
              <li class="flex items-start gap-3">
                <svg
                  class="w-5 h-5 text-pink-500 flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span class="text-gray-300">Weekly analytics</span>
              </li>

              <li class="flex items-start gap-3">
                <svg
                  class="w-5 h-5 text-pink-500 flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span class="text-gray-300">Manual daily planning</span>
              </li>
              <li class="flex items-start gap-3 opacity-40">
                <svg
                  class="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
                <span class="text-gray-500 line-through">AI-powered daily generation</span>
              </li>
            </ul>
          </div>

          <!-- Pro Plan -->
          <div
            class="bg-[#222b3d] border-2 border-pink-500 p-8 rounded-lg relative shadow-lg shadow-pink-500/20"
          >
            <div class="absolute -top-4 left-1/2 -translate-x-1/2">
              <span class="gradient-bg text-white text-sm font-medium px-4 py-1 rounded-full">
                Most Popular
              </span>
            </div>

            <div class="mb-6">
              <h3 class="text-2xl font-bold text-white mb-2">Pro</h3>
              <p class="text-gray-400 text-sm">Unlock AI-powered productivity</p>
            </div>

            <div class="mb-6">
              <span class="text-5xl font-bold text-white">$5</span>
              <span class="text-gray-400 ml-2">/ per month</span>
            </div>

            <button
              class="w-full mb-8 gradient-bg text-white px-6 py-3 rounded-lg transition-all cursor-pointer"
              [routerLink]="'/register/pro'"
            >
              Start Free Trial
            </button>

            <ul class="space-y-3">
              <li class="flex items-start gap-3">
                <svg
                  class="w-5 h-5 text-pink-500 flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span class="text-gray-300">Everything in Free</span>
              </li>
              <li class="flex items-start gap-3">
                <div
                  class="w-5 h-5 rounded-full gradient-bg flex items-center justify-center flex-shrink-0 mt-0.5"
                >
                  <svg
                    class="w-3 h-3 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <span class="text-white font-semibold">AI-Powered Daily Generation</span>
                  <p class="text-gray-400 text-sm">Let AI create your perfect daily schedule</p>
                </div>
              </li>
              <li class="flex items-start gap-3">
                <svg
                  class="w-5 h-5 text-pink-500 flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span class="text-gray-300">Advanced analytics & insights</span>
              </li>
              <li class="flex items-start gap-3">
                <svg
                  class="w-5 h-5 text-pink-500 flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span class="text-gray-300">Smart task prioritization</span>
              </li>
              <li class="flex items-start gap-3">
                <svg
                  class="w-5 h-5 text-pink-500 flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span class="text-gray-300">Optimal time blocking</span>
              </li>

              <li class="flex items-start gap-3">
                <svg
                  class="w-5 h-5 text-pink-500 flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span class="text-gray-300">Priority support</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrl: './pricing.scss',
})
export class Pricing {}
