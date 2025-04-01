import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "Logan's Shop Book",
        short_name: 'ShopBook',
        description: 'A "Comprehensive" guide to the Lighting Equipment in the UNCSA Shop',
        start_url: '/',
        display: 'standalone',
        background_color: '#000000',
        theme_color: '#000000',
        icons: [
            {
                src: '/favicon/icon-192x192.png',
                sizes: '192x192',
                type: 'image/png',
            },
            {
                src: '/favicon/icon-512x512.png',
                sizes: '512x512',
                type: 'image/png',
            },
        ],
    }
}