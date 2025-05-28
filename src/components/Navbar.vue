<template>
    <header class="relative">
      <!-- transparant glasbalk met zachte gradient -->
      <nav
        class="backdrop-blur-md/60 bg-white/20
               shadow-md ring-1 ring-white/10"
      >
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="flex h-16 items-center justify-between">
            <!-- Brand --------------------------------------------------->
            <h1 class="text-lg font-extrabold tracking-widest text-white drop-shadow-sm">
              VALIDATE
            </h1>
  
            <ul class="hidden sm:flex items-center space-x-6">
                <li class="relative">
                    <router-link to="/" class="text-sm text-white hover:text-white/80
                            after:absolute after:-bottom-1 after:left-0
                            after:h-0.5 after:w-full after:bg-white/50
                            after:transition-all after:duration-300
                            hover:after:h-full">
                    ValidateOpdrachtView
                </router-link>
                </li>
                 <li class="relative">
                  <router-link to="/validate2" class="text-sm text-white hover:text-white/80
                            after:absolute after:-bottom-1 after:left-0
                            after:h-0.5 after:w-full after:bg-white/50
                            after:transition-all after:duration-300
                            hover:after:h-full">
                    validate met useField
                </router-link>
               </li>
               <li class="relative">
                  <router-link to="/alerttest" class="text-sm text-white hover:text-white/80
                            after:absolute after:-bottom-1 after:left-0
                            after:h-0.5 after:w-full after:bg-white/50
                            after:transition-all after:duration-300
                            hover:after:h-full">
                    Alert Test
                </router-link>
               </li>
               <!--  <li class="relative">
                    <router-link to="/validate3" class="text-sm text-white hover:text-white/80
                            after:absolute after:-bottom-1 after:left-0
                            after:h-0.5 after:w-full after:bg-white/50
                            after:transition-all after:duration-300
                            hover:after:h-full">
                        validate 3
                    </router-link>
                </li>
                <li class="relative">
                    <router-link to="/validate4" class="text-sm text-white hover:text-white/80
                            after:absolute after:-bottom-1 after:left-0
                            after:h-0.5 after:w-full after:bg-white/50
                            after:transition-all after:duration-300
                            hover:after:h-full">
                        validate 4
                    </router-link>
                </li>
                <li class="relative">
                    <router-link to="/validate5" class="text-sm text-white hover:text-white/80
                            after:absolute after:-bottom-1 after:left-0
                            after:h-0.5 after:w-full after:bg-white/50
                            after:transition-all after:duration-300
                            hover:after:h-full">
                        validate 5
                    </router-link> 
                </li>-->
            </ul>
          </div>
        </div> 
      </nav>
    </header>
  </template>
  
  <style scoped>
  /* ▼ Kleine helper om kleurverloop in link-underline vloeiend te laten lopen */
  a::after { transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); }
  
  /* ▼ Milde achtergrond-gradient voor de hele navbar */
  header::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(120deg,#2563eb 0%,#0891b2 100%);
    opacity: 0.35;         /* zacht! */
    pointer-events: none;  /* laat klikken door */
  }
  </style>
  