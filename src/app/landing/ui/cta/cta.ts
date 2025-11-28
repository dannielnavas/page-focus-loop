import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cta',
  imports: [RouterLink],
  template: `
    <section class="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-purple-600/30 to-pink-600/30 rounded-full blur-gradient"
        ></div>
      </div>

      <div class="container mx-auto max-w-4xl relative z-10 text-center">
        <h2 class="text-4xl sm:text-5xl font-bold text-white mb-6">
          Ready to transform your productivity?
        </h2>
        <p class="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Join thousands of focused individuals who are achieving their goals with Focus Loop.
        </p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            class="gradient-bg text-white font-medium text-lg px-8 py-4 rounded-lg transition-all flex items-center gap-2 cursor-pointer"
            [routerLink]="'/register/free'"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
              ></path>
            </svg>
            Start Free Today
          </button>
          <!-- <button
            class="border-2 border-white/20 text-white hover:bg-white/5 text-lg px-8 py-4 rounded-lg bg-transparent transition-all"
          >
            Schedule a Demo
          </button> -->
        </div>
      </div>
    </section>
  `,
  styleUrl: './cta.scss',
})
export class Cta {}
