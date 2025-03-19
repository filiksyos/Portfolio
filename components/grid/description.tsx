import profile from '@/public/images/new_profile.jpg';
import Image from 'next/image';
import Card from '../ui/card';

export default function Description() {
    return (
        <Card className='flex flex-col justify-center gap-4 p-8'>
            <div className='relative size-14 overflow-hidden rounded-full sm:size-16'>
                <Image
                    src={profile}
                    alt='Filiksyos Destaw'
                    fill
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                    placeholder='blur'
                    priority
                />
            </div>
            <p className='leading-relaxed'>
                Hi, I&apos;m <span className='font-pixelify-sans text-xl'>Filiksyos</span>, a software engineer from
                Bahir Dar, Ethiopia.{' '}
                <span className='hidden md:inline'>I love building reliable software and learning new things.</span>
            </p>
        </Card>
    );
}
