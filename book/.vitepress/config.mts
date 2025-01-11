// Copyright (c) 2025, Kevin Damm
// 
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
// 
// 1. Redistributions of source code must retain the above copyright notice, this
//    list of conditions and the following disclaimer.
// 
// 2. Redistributions in binary form must reproduce the above copyright notice,
//    this list of conditions and the following disclaimer in the documentation
//    and/or other materials provided with the distribution.
// 
// 3. Neither the name of the copyright holder nor the names of its
//    contributors may be used to endorse or promote products derived from
//    this software without specific prior written permission.
// 
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
// AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
// DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
// FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
// DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
// SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
// CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
// OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
// 
// github:kevindamm/edge-saas/book/.vitepress/config.mts

import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Edge SaaS Tutorials",
  description: "using Cloudflare, TypeScript and Hono",
  cleanUrls: true,
  themeConfig: { // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '', link: '' },
    ],

    sidebar: [
      { text: 'Introduction',
        link: '/0-intro',
        items: [
          { text: 'Objectives', link: '/intro/objectives' },
          { text: 'Conventions', link: '/intro/conventions' },
          { text: 'Licensing', link: '/intro/license' }
        ]},

      { text: 'Project Setup',
        link: '/1-project',
        items: [
          { text: 'Getting Started', link: '/project/start' },
          { text: 'Promotional Site (Pages)', link: '/project/promo' },
          // { text: 'Asset Serving (Workers + R2)', link: '/project/assets' },
          // { text: 'Article Comments (Workers + D1)', link: '/project/emails' },
          // { text: 'Email Collection (Workers + D1 + privacy)', link: '/project/emails' },
          // { text: 'Vote Polling (Workers + KV + D1)', link: '/project/votes' }
        ]},

      { text: '2. Realtime Updates',
        link: '/2-realtime',
        // items: [
        //   { text: 'Emote Stream (Durable Objects + SSE)', link: '/realtime/visitors' },
        //   { text: 'RateLimiter (WebSockets + DO volatile)', link: '/realtime/ratelimiter' },
        //   { text: 'Chat Rooms (WebSockets + DO nonvolatile) ', link: '/realtime/chatparty' },
        //   { text: 'Videoconference (WebRTC peer + bridge)', link: '/realtime/webrtc' }
        // ]
      },

      { text: '3. Protecting Sensitive Data',
        link: '/3-protect',
        // items: [
        //   { text: 'TLS (secure channels)', link: '/protect/tls' },
        //   { text: 'JWT (trust tokens)', link: '/protect/jwt' },
        //   { text: 'bcrypt (no passwords in DB)', link: '/protect/bcrypt' },
        //   { text: 'AES (encrypting storage)', link: '/protect/aes' }
        // ]
      },

      { text: '4. Authentication and Authorization',
        link: '/4-auth',
        // items: [
        //   { text: 'Email Validation', link: '/authn/email' },
        //   { text: 'Open Authentication', link: '/authn/oauth' },
        //   { text: 'Authorization (ACLs)', link: '/authz/acls' },
        //   { text: 'Authorization (roles)', link: '/authz/roles' }
        // ]
      },
    
      { text: '5. Game Services',
        link: '/5-games',
        // items: [
        //   { text: 'Janken match', link: '/games/janken' },
        //   { text: 'Janken tourney (lobby chat)', link: '/games/chat' },
        //   { text: 'Janken Royale (team chat)', link: '/games/teams' },
        //   { text: 'Tic-Tac-Trivia (voice chat), link: '/games/t3rivia' },
        //   { text: 'Developing with LÖVE', link: '/games/love' }
        // ]
      },
      
      { text: '6. Fronted Focus',
        link: '/6-frontend',
        // items: [
        //   { text: 'Image serving, optimizing', link: '/frontend/images' },
        //   { text: 'HTMX and interaction', link: '/frontend/htmx' },
        //   { text: 'SEO Considerations', link: '/frontend/seo' },
        //   { text: 'Every form needs CSRF', link: '/frontend/csrf' },
        //   { text: 'Streaming video content', link: '/frontend/video' }
        // ]
      },

      { text: '7. Continuous Tooling',
        link: '/7-tooling',
        // items: [
        //   { text: 'Integration', link: '/tooling/integrate' },
        //   { text: 'Orchestration', link: '/tooling/orchestrate' },
        //   { text: 'Allocation', link: '/tooling/allocate' },
        //   { text: 'Moderation', link: '/tooling/moderate' },
        //   { text: 'Policy-Forward', link: '/tooling/policy-forward' }
        // ]
      }
    ],

    socialLinks: [
      { link: 'https://github.com/kevindamm/edge-saas',
        icon: 'github',
        ariaLabel: 'GitHub repo' 
      },
      {
        link: 'https://developers.cloudflare.com/',
        icon: { svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill="#FFF" d="m115.679 69.288-15.591-8.94-2.689-1.163-63.781.436v32.381h82.061z"/><path fill="#F38020" d="M87.295 89.022c.763-2.617.472-5.015-.8-6.796-1.163-1.635-3.125-2.58-5.488-2.689l-44.737-.581c-.291 0-.545-.145-.691-.363s-.182-.509-.109-.8c.145-.436.581-.763 1.054-.8l45.137-.581c5.342-.254 11.157-4.579 13.192-9.885l2.58-6.723c.109-.291.145-.581.073-.872-2.906-13.158-14.644-22.97-28.672-22.97-12.938 0-23.913 8.359-27.838 19.952a13.35 13.35 0 0 0-9.267-2.58c-6.215.618-11.193 5.597-11.811 11.811-.145 1.599-.036 3.162.327 4.615C10.104 70.051 2 78.337 2 88.549c0 .909.073 1.817.182 2.726a.895.895 0 0 0 .872.763h82.57c.472 0 .909-.327 1.054-.8l.617-2.216z"/><path fill="#FAAE40" d="M101.542 60.275c-.4 0-.836 0-1.236.036-.291 0-.545.218-.654.509l-1.744 6.069c-.763 2.617-.472 5.015.8 6.796 1.163 1.635 3.125 2.58 5.488 2.689l9.522.581c.291 0 .545.145.691.363.145.218.182.545.109.8-.145.436-.581.763-1.054.8l-9.924.582c-5.379.254-11.157 4.579-13.192 9.885l-.727 1.853c-.145.363.109.727.509.727h34.089c.4 0 .763-.254.872-.654.581-2.108.909-4.325.909-6.614 0-13.447-10.975-24.422-24.458-24.422"/></svg>' },
        ariaLabel: 'Cloudflare Docs'
      } //,
//      { link: 'https://edge-saas.kevindamm.com/demos',
//        icon: {
//          svg: 'TBD',
//        },
//        ariaLabel: 'Demo Site'
//      }
    ]
  },
  head: [
    [ 'link',
      { rel: 'icon', href: '/favicon.ico' }],
    [ 'link',
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    [ 'link',
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    [ 'link',
      { href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap', rel: 'stylesheet' }]
  ]
})
