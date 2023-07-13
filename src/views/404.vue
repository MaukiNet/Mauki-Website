<script setup lang="ts">
  console.log("Test");
</script>

<template>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="https://fonts.googleapis.com/css?family=Nunito+Sans:300i,400,700&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
    </head>
    <body>
        <div class="bg-gradient-to-r from-red-400 to-orange-300">
            <div class="w-9/12 m-auto py-16 min-h-screen flex items-center justify-center">
                <div class="bg-white shadow overflow-hidden sm:rounded-lg pb-8">
                    <div class="border-t border-gray-200 text-center pt-8">
                        <h1 class="text-9xl font-bold text-red-400">404</h1>
                        <h1 class="text-6xl font-medium py-8">Seite wurde nicht gefunden!</h1>
                        <p class="text-2xl pb-8 px-12 font-medium">Die angeforderte Seite wurde nicht gefunden. Vielleicht hast du dich vertippt?</p>
                        <a class="bg-gradient-to-r from-purple-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white font-semibold px-6 py-3 rounded-md mr-6" href="/">
                            HOME
                        </a>
                        <button class="bg-gradient-to-r from-red-400 to-red-500 hover:from-red-500 hover:to-red-500 text-white font-semibold px-6 py-3 rounded-md">
                            Kontakt
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </body>
</template>