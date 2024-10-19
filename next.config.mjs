/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'img.youtube.com',
            pathname: '/vi/**',
          },
          {
            protocol: 'https',
            hostname: 't3.ftcdn.net',
          },
          {
            protocol: 'https',
            hostname: 'infrastructurepipeline.org',
          },
          {
            protocol: 'https',
            hostname: 'www.carehospitals.com',
          },
          {
            protocol: 'https',
            hostname: 'www.impactguru.com',
          },
          {
            protocol: 'https',
            hostname: 'avocure-uploads.s3.amazonaws.com',
          }
        ],
        
      },
};

export default nextConfig;
