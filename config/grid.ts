import Article from '@/components/grid/article';
import Contact from '@/components/grid/contact';
import Description from '@/components/grid/description';
import GitMVP from '@/components/grid/gitmvp';
import GitSearchAI from '@/components/grid/gitsearchai';
import GitToDoc from '@/components/grid/gittodoc';
import Project from '@/components/grid/project';
import LinkedIn from '@/components/grid/linkedin';
import Location from '@/components/grid/location';
import SkillsShowcase from '@/components/grid/skills-showcase';
import Theme from '@/components/grid/theme';
import { Layout } from 'react-grid-layout';

interface GridItem {
    i: string;
    component: React.ComponentType;
}

export const gridItems: GridItem[] = [
    { i: 'description', component: Description },
    { i: 'location', component: Location },
    { i: 'project', component: Project },
    { i: 'skills', component: SkillsShowcase },
    { i: 'article', component: Article },
    { i: 'gittodoc', component: GitToDoc },
    { i: 'gitsearchai', component: GitSearchAI },
    { i: 'gitmvp', component: GitMVP },
    { i: 'theme', component: Theme },
    { i: 'linkedin', component: LinkedIn },
    { i: 'contact', component: Contact },
];

type Layouts = 'lg' | 'md' | 'sm';

export const layouts: { [key in Layouts]: Layout[] } = {
    lg: [
        { i: 'description', x: 0, y: 0, w: 2, h: 1 },
        { i: 'location', x: 2, y: 0, w: 1, h: 1 },
        { i: 'project', x: 3, y: 0, w: 1, h: 2 },
        { i: 'skills', x: 0, y: 1, w: 1, h: 1 },
        { i: 'article', x: 1, y: 1, w: 2, h: 1 },
        { i: 'gittodoc', x: 0, y: 2, w: 2, h: 1 },
        { i: 'theme', x: 2, y: 2, w: 1, h: 1 },
        { i: 'linkedin', x: 3, y: 2, w: 1, h: 1 },
        { i: 'gitsearchai', x: 0, y: 3, w: 2, h: 1 },
        { i: 'gitmvp', x: 2, y: 3, w: 2, h: 1 },
        { i: 'contact', x: 0, y: 4, w: 4, h: 1 },
    ],
    md: [
        { i: 'description', x: 0, y: 0, w: 2, h: 2 },
        { i: 'location', x: 2, y: 0, w: 2, h: 1 },
        { i: 'linkedin', x: 2, y: 1, w: 1, h: 1 },
        { i: 'project', x: 3, y: 1, w: 1, h: 2 },
        { i: 'skills', x: 0, y: 2, w: 2, h: 1 },
        { i: 'theme', x: 2, y: 2, w: 1, h: 1 },
        { i: 'article', x: 0, y: 3, w: 2, h: 2 },
        { i: 'gittodoc', x: 2, y: 3, w: 2, h: 1 },
        { i: 'gitsearchai', x: 2, y: 4, w: 2, h: 1 },
        { i: 'gitmvp', x: 0, y: 5, w: 2, h: 1 },
        { i: 'contact', x: 0, y: 6, w: 4, h: 2 },
    ],
    sm: [
        { i: 'description', x: 0, y: 0, w: 2, h: 2 },
        { i: 'location', x: 0, y: 2, w: 2, h: 1 },
        { i: 'linkedin', x: 0, y: 3, w: 1, h: 1 },
        { i: 'project', x: 1, y: 3, w: 1, h: 2 },
        { i: 'theme', x: 0, y: 4, w: 1, h: 1 },
        { i: 'skills', x: 0, y: 5, w: 2, h: 2 },
        { i: 'article', x: 0, y: 7, w: 2, h: 2 },
        { i: 'gittodoc', x: 0, y: 9, w: 2, h: 1 },
        { i: 'gitsearchai', x: 0, y: 10, w: 2, h: 1 },
        { i: 'gitmvp', x: 0, y: 11, w: 2, h: 1 },
        { i: 'contact', x: 0, y: 12, w: 2, h: 2 },
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
