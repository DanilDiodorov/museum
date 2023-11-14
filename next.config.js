/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: 'build',
    webpack: (config) => {
        config.module.rules.push({
            test: /\.node/,
            use: 'raw-loader',
        })

        return config
    },
}

module.exports = nextConfig
