import Article from '@/components/grid/article';
import Contact from '@/components/grid/contact';
import Description from '@/components/grid/description';
import Github from '@/components/grid/github';
import LinkedIn from '@/components/grid/linkedin';
import Location from '@/components/grid/location';
import ProjectOne from '@/components/grid/project-one';
import ProjectThree from '@/components/grid/project-three';
import ProjectTwo from '@/components/grid/project-two';
import Spotify from '@/components/grid/spotify';

interface GridItems {
    i: string;
    component: () => JSX.Element;
}

export const gridItems: GridItems[] = [
    { i: 'description', component: Description },
    { i: 'location', component: Location },
    { i: 'project-1', component: ProjectOne },
    { i: 'linkedin', component: LinkedIn },
    { i: 'github', component: Github },
    { i: 'project-2', component: ProjectTwo },
    { i: 'spotify', component: Spotify },
    { i: 'project-3', component: ProjectThree },
    { i: 'article', component: Article },
    { i: 'contact', component: Contact },
];

export const lgLayout = [
    { i: 'description', x: 0, y: 0, w: 2, h: 1 },
    { i: 'location', x: 2, y: 0, w: 1, h: 1 },
    { i: 'project-1', x: 3, y: 0, w: 1, h: 2 },
    { i: 'spotify', x: 0, y: 1, w: 1, h: 1 },
    { i: 'linkedin', x: 1, y: 1, w: 1, h: 1 },
    { i: 'project-2', x: 2, y: 1, w: 1, h: 2 },
    { i: 'article', x: 0, y: 2, w: 2, h: 1 },
    { i: 'github', x: 3, y: 2, w: 1, h: 1 },
    { i: 'project-3', x: 0, y: 3, w: 2, h: 1 },
    { i: 'contact', x: 2, y: 3, w: 2, h: 1 },
];

export const mdLayout = [
    { i: 'description', x: 0, y: 0, w: 2, h: 2 },
    { i: 'location', x: 2, y: 0, w: 2, h: 1 },
    { i: 'linkedin', x: 2, y: 1, w: 1, h: 1 },
    { i: 'project-1', x: 3, y: 1, w: 1, h: 2 },
    { i: 'project-2', x: 2, y: 2, w: 1, h: 2 },
    { i: 'github', x: 3, y: 3, w: 1, h: 1 },
    { i: 'project-3', x: 0, y: 4, w: 2, h: 1 },
    { i: 'article', x: 0, y: 5, w: 2, h: 1 },
    { i: 'spotify', x: 0, y: 2, w: 2, h: 2 },
    { i: 'contact', x: 2, y: 4, w: 2, h: 2 },
];

export const smLayout = [
    { i: 'description', x: 0, y: 0, w: 2, h: 2 },
    { i: 'location', x: 0, y: 2, w: 2, h: 1 },
    { i: 'linkedin', x: 0, y: 3, w: 1, h: 1 },
    { i: 'project-1', x: 1, y: 3, w: 1, h: 2 },
    { i: 'project-2', x: 0, y: 4, w: 1, h: 2 },
    { i: 'github', x: 1, y: 5, w: 1, h: 1 },
    { i: 'spotify', x: 0, y: 6, w: 2, h: 2 },
    { i: 'project-3', x: 0, y: 8, w: 2, h: 1 },
    { i: 'article', x: 0, y: 9, w: 2, h: 2 },
    { i: 'contact', x: 2, y: 11, w: 2, h: 2 },
];
