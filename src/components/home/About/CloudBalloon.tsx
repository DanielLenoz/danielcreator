import IconCloud from 'app/components/magicUI/icon-cloud'

const slugs = [
  'typescript',
  'javascript',
  'react',
  'html5',
  'css3',
  'nodedotjs',
  'nextdotjs',
  'prisma',
  'vercel',
  'git',
  'github',
  'visualstudiocode',
  'figma',
  'tailwindcss',
  'vite',
  'iterm2',
  'npm',
  'supabase',
  'gitforwindows',
]

export function CloudBalloon() {
  return (
    <div className="bg-background relative mx-auto grid h-full w-full max-w-[22rem] items-center justify-center overflow-hidden rounded-lg">
      <IconCloud iconSlugs={slugs} />
    </div>
  )
}
