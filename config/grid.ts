import Contact from '@/components/grid/contact';
import Description from '@/components/grid/description';
import GitMVP from '@/components/grid/gitmvp';
import GitSearchAI from '@/components/grid/gitsearchai';
import GitToDoc from '@/components/grid/gittodoc';
import Location from '@/components/grid/location';
import OtherProjects from '@/components/grid/other-projects';
import SkillsShowcase from '@/components/grid/skills-showcase';
import Theme from '@/components/grid/theme';
import X from '@/components/grid/x';
import { Layout } from 'react-grid-layout';

interface GridItem {
    i: string;
    component: React.ComponentType;
}

export const gridItems: GridItem[] = [
    { i: 'description', component: Description },
    { i: 'location', component: Location },
    { i: 'skills', component: SkillsShowcase },
    { i: 'gittodoc', component: GitToDoc },
    { i: 'gitsearchai', component: GitSearchAI },
    { i: 'gitmvp', component: GitMVP },
    { i: 'other-projects', component: OtherProjects },
    { i: 'theme', component: Theme },
    { i: 'x', component: X },
    { i: 'contact', component: Contact },
];

type Layouts = 'lg' | 'md' | 'sm';

export const layouts: { [key in Layouts]: Layout[] } = {
    lg: [
        { i: 'description', x: 0, y: 0, w: 2, h: 1 },
        { i: 'location', x: 2, y: 0, w: 1, h: 1 },
        { i: 'other-projects', x: 3, y: 0, w: 1, h: 2 },
        { i: 'skills', x: 0, y: 1, w: 1, h: 1 },
        { i: 'gittodoc', x: 1, y: 1, w: 2, h: 1 },
        { i: 'theme', x: 0, y: 2, w: 1, h: 1 },
        { i: 'gitmvp', x: 1, y: 2, w: 2, h: 1 },
        { i: 'x', x: 3, y: 2, w: 1, h: 1 },
        { i: 'gitsearchai', x: 0, y: 3, w: 2, h: 1 },
        { i: 'contact', x: 2, y: 3, w: 2, h: 1 },
    ],
    md: [
        { i: 'description', x: 0, y: 0, w: 2, h: 2 },
        { i: 'location', x: 2, y: 0, w: 2, h: 1 },
        { i: 'other-projects', x: 3, y: 1, w: 1, h: 2 },
        { i: 'x', x: 2, y: 1, w: 1, h: 1 },
        { i: 'skills', x: 0, y: 2, w: 1, h: 1 },
        { i: 'gittodoc', x: 1, y: 2, w: 2, h: 1 },
        { i: 'theme', x: 0, y: 3, w: 1, h: 1 },
        { i: 'gitmvp', x: 1, y: 3, w: 2, h: 1 },
        { i: 'gitsearchai', x: 0, y: 4, w: 2, h: 1 },
        { i: 'contact', x: 2, y: 4, w: 2, h: 1 },
    ],
    sm: [
        { i: 'description', x: 0, y: 0, w: 2, h: 2 },
        { i: 'location', x: 0, y: 2, w: 2, h: 1 },
        { i: 'other-projects', x: 0, y: 3, w: 2, h: 2 },
        { i: 'skills', x: 0, y: 5, w: 1, h: 1 },
        { i: 'x', x: 1, y: 5, w: 1, h: 1 },
        { i: 'theme', x: 0, y: 6, w: 1, h: 1 },
        { i: 'gittodoc', x: 0, y: 7, w: 2, h: 1 },
        { i: 'gitmvp', x: 0, y: 8, w: 2, h: 1 },
        { i: 'gitsearchai', x: 0, y: 9, w: 2, h: 1 },
        { i: 'contact', x: 0, y: 10, w: 2, h: 1 },
    ],
};

const projectLargeLayout: Layout[] = [
    { i: 'images-1', x: 0, y: 0, w: 2, h: 1 },
    { i: 'images-2', x: 2, y: 0, w: 1, h: 1 },
    { i: 'images-3', x: 3, y: 0, w: 1, h: 2 },
    { i: 'images-4', x: 0, y: 1, w: 1, h: 1 },
    { i: 'images-5', x: 1, y: 1, w: 2, h: 1 },
]

export const projectLayouts: { [key in Layouts]: Layout[] } = {
    lg: projectLargeLayout,
    md: projectLargeLayout,
    sm: [
        { i: 'images-1', x: 0, y: 0, w: 2, h: 1 },
        { i: 'images-2', x: 0, y: 1, w: 1, h: 1 },
        { i: 'images-3', x: 1, y: 1, w: 1, h: 2 },
        { i: 'images-4', x: 0, y: 2, w: 1, h: 1 },
        { i: 'images-5', x: 2, y: 3, w: 2, h: 1 },
    ],
};
