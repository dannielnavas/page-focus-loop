import { Component } from '@angular/core';

@Component({
  selector: 'app-ai-powered',
  imports: [],
  template: `
    <section class="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-full blur-gradient"
        ></div>
      </div>

      <div class="container mx-auto max-w-6xl relative z-10">
        <div
          class="bg-gradient-to-br from-[#222b3d] to-[#1e2738] border-2 border-pink-500/50 rounded-2xl p-8 md:p-12 ai-feature-glow"
        >
          <div class="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div
                class="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/30 rounded-full px-4 py-2 mb-6"
              >
                <svg
                  class="w-5 h-5 text-pink-400"
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
                <span class="text-sm font-semibold text-pink-400">AI-POWERED</span>
              </div>

              <h2 class="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Your <span class="gradient-text">AI Daily Planner</span>
              </h2>

              <p class="text-xl text-gray-300 mb-8 leading-relaxed">
                Let artificial intelligence create your perfect daily schedule. Our AI analyzes your
                goals, habits, and productivity patterns to generate personalized daily plans that
                maximize your focus and achievement.
              </p>

              <ul class="space-y-4 mb-8">
                <li class="flex items-start gap-3">
                  <div
                    class="w-6 h-6 rounded-full gradient-bg flex items-center justify-center flex-shrink-0 mt-1"
                  >
                    <svg
                      class="w-4 h-4 text-white"
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
                  </div>
                  <div>
                    <span class="text-white font-semibold">Smart Task Prioritization</span>
                    <p class="text-gray-400 text-sm">
                      AI ranks your tasks based on urgency, importance, and your energy levels
                    </p>
                  </div>
                </li>
                <li class="flex items-start gap-3">
                  <div
                    class="w-6 h-6 rounded-full gradient-bg flex items-center justify-center flex-shrink-0 mt-1"
                  >
                    <svg
                      class="w-4 h-4 text-white"
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
                  </div>
                  <div>
                    <span class="text-white font-semibold">Optimal Time Blocking</span>
                    <p class="text-gray-400 text-sm">
                      Automatically schedules tasks when you're most productive
                    </p>
                  </div>
                </li>
                <li class="flex items-start gap-3">
                  <div
                    class="w-6 h-6 rounded-full gradient-bg flex items-center justify-center flex-shrink-0 mt-1"
                  >
                    <svg
                      class="w-4 h-4 text-white"
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
                  </div>
                  <div>
                    <span class="text-white font-semibold">Adaptive Learning</span>
                    <p class="text-gray-400 text-sm">
                      Gets smarter every day by learning from your work patterns
                    </p>
                  </div>
                </li>
              </ul>

              <button
                class="gradient-bg text-white font-medium text-lg px-8 py-4 rounded-lg transition-all inline-flex items-center gap-2"
              >
                Try AI Planning - Only $5/month
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  ></path>
                </svg>
              </button>
            </div>

            <div class="relative">
              <div class="bg-[#1a2332] border border-white/10 rounded-xl p-6 shadow-2xl">
                <div class="flex items-center gap-2 mb-4">
                  <div class="w-3 h-3 rounded-full bg-red-500"></div>
                  <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div class="w-3 h-3 rounded-full bg-green-500"></div>
                  <span class="ml-auto text-xs text-gray-400">AI Generated Daily Plan</span>
                </div>

                <div class="space-y-3">
                  <div class="bg-[#222b3d] border border-pink-500/30 rounded-lg p-4">
                    <div class="flex items-center gap-3 mb-2">
                      <span class="text-pink-400 font-semibold text-sm">08:00 - 10:00</span>
                      <span class="text-xs bg-pink-500/20 text-pink-400 px-2 py-1 rounded"
                        >High Priority</span
                      >
                    </div>
                    <p class="text-white font-medium">Deep work: Complete project proposal</p>
                    <p class="text-gray-400 text-sm mt-1">Peak focus time detected</p>
                  </div>

                  <div class="bg-[#222b3d] border border-purple-500/30 rounded-lg p-4">
                    <div class="flex items-center gap-3 mb-2">
                      <span class="text-purple-400 font-semibold text-sm">10:15 - 11:00</span>
                      <span class="text-xs bg-purple-500/20 text-purple-400 px-2 py-1 rounded"
                        >Medium</span
                      >
                    </div>
                    <p class="text-white font-medium">Team meeting & collaboration</p>
                    <p class="text-gray-400 text-sm mt-1">Social energy optimal</p>
                  </div>

                  <div class="bg-[#222b3d] border border-blue-500/30 rounded-lg p-4">
                    <div class="flex items-center gap-3 mb-2">
                      <span class="text-blue-400 font-semibold text-sm">14:00 - 15:30</span>
                      <span class="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded"
                        >Creative</span
                      >
                    </div>
                    <p class="text-white font-medium">Brainstorm new features</p>
                    <p class="text-gray-400 text-sm mt-1">Creative peak identified</p>
                  </div>
                </div>

                <div class="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
                  <span class="text-gray-400 text-sm">Generated by AI</span>
                  <svg
                    class="w-5 h-5 text-pink-400"
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrl: './ai-powered.scss',
})
export class AiPowered {}
