import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  template: `
    <footer class="border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8">
      <div class="container mx-auto max-w-7xl">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 class="font-semibold text-white mb-4">Product</h3>
            <ul class="space-y-2">
              <li>
                <a href="#features" class="text-gray-400 hover:text-white transition-colors"
                  >Features</a
                >
              </li>
              <li>
                <a href="#pricing" class="text-gray-400 hover:text-white transition-colors"
                  >Pricing</a
                >
              </li>
              <li><a href="#" class="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h3 class="font-semibold text-white mb-4">Company</h3>
            <ul class="space-y-2">
              <li>
                <a href="#" class="text-gray-400 hover:text-white transition-colors">About</a>
              </li>
              <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Blog</a></li>
              <li>
                <a href="#" class="text-gray-400 hover:text-white transition-colors">Careers</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 class="font-semibold text-white mb-4">Resources</h3>
            <ul class="space-y-2">
              <li>
                <a href="#" class="text-gray-400 hover:text-white transition-colors"
                  >Documentation</a
                >
              </li>
              <li>
                <a href="#" class="text-gray-400 hover:text-white transition-colors">Help Center</a>
              </li>
              <li>
                <a href="#" class="text-gray-400 hover:text-white transition-colors">Community</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 class="font-semibold text-white mb-4">Legal</h3>
            <ul class="space-y-2">
              <li>
                <a href="#" class="text-gray-400 hover:text-white transition-colors">Privacy</a>
              </li>
              <li>
                <a href="#" class="text-gray-400 hover:text-white transition-colors">Terms</a>
              </li>
              <li>
                <a href="#" class="text-gray-400 hover:text-white transition-colors">Security</a>
              </li>
            </ul>
          </div>
        </div>

        <div
          class="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <div class="text-xl font-bold text-white">Focus Loop</div>
          <div class="text-gray-400 text-sm">© 2025 Focus Loop. All rights reserved.</div>
        </div>
      </div>
    </footer>
  `,
  styleUrl: './footer.scss',
})
export class Footer {}
