import dynamic from 'next/dynamic';
import Card from '../card';

const DynamicMap = dynamic(
    () => import('@/components/grid/partial/dynamic-map'),
    {
        ssr: false,
    }
);

export default function Map() {
    return (
        <Card className='relative'>
            <DynamicMap />
        </Card>
    );
}
