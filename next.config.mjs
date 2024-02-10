import nextMDX from '@next/mdx';
 
/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
}
  
const withMDX = nextMDX({
options: {
    remarkPlugins: [],
    rehypePlugins: [],
    providerImportSource: 'private-next-root-dir/src/mdx-components',
},
})
 
export default withMDX(nextConfig);
