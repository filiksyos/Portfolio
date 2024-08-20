'use client';

import Link from 'next/link';
import { FaSpotify } from 'react-icons/fa6';
import useSWR from 'swr';
import Card from '../card';

interface Spotify {
    isPlaying: boolean;
    title: string;
    album: string;
    artist: string;
    albumImageUrl: string;
    songUrl: string;
}

const fetcher = (url: string) => fetch(url).then((r) => r.json());

const NowPlayingLoading = () => (
    <div className='flex flex-col gap-2'>
        <div className='flex items-center gap-2'>
            <div className='inline-flex items-center justify-center gap-1'>
                <div className='size-1 rounded-full bg-[#1DB954]' />
                <div className='size-1 rounded-full bg-[#1DB954]' />
                <div className='size-1 rounded-full bg-[#1DB954]' />
            </div>
            <div className='h-4 animate-pulse rounded-md bg-gray-300'>
                <span className='invisible'>Now Playing</span>
            </div>
        </div>
        <div className='h-6 animate-pulse rounded-md bg-gray-300'>
            <span className='invisible'>Song Title</span>
        </div>
        <div className='h-4 animate-pulse rounded-md bg-gray-300'>
            <span className='invisible'>Artist</span>
        </div>
    </div>
);

function NowPlaying() {
    const { data, isLoading } = useSWR<Spotify>(`/api/now-playing`, fetcher);

    if (isLoading) return <NowPlayingLoading />;

    return (
        <div>
            <div className='flex items-center gap-2'>
                <div className='inline-flex items-center justify-center gap-1'>
                    <div className='w-1 animate-[playing_0.85s_ease_infinite] rounded-full bg-[#1DB954]' />
                    <div className='w-1 animate-[playing_1.26s_ease_infinite] rounded-full bg-[#1DB954]' />
                    <div className='w-1 animate-[playing_0.62s_ease_infinite] rounded-full bg-[#1DB954]' />
                </div>
                <p className='text-sm'>
                    {data?.isPlaying ? 'Now Playing' : 'Offline. Last Played'}
                </p>
            </div>
            <h2
                className='cancel-drag line-clamp-3 text-2xl font-semibold md:line-clamp-1 lg:line-clamp-3'
                title={data?.title}>
                <Link
                    href={data?.songUrl ?? '#'}
                    target='_blank'
                    rel='nofollow noopener noreferrer'>
                    {data?.title}
                </Link>
            </h2>
            <p className='truncate' title={data?.artist}>
                {data?.artist}
            </p>
        </div>
    );
}

export default function Spotify() {
    return (
        <Card className='flex h-full flex-col justify-between gap-3 p-8'>
            <div className='relative'>
                <FaSpotify
                    className='size-14 md:absolute md:right-0 md:top-0 md:size-10 lg:relative lg:size-14'
                    color='#1DB954'
                />
            </div>
            <NowPlaying />
        </Card>
    );
}
