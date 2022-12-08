import About from '@/views/About/About.vue';
import Results from '@/views/Results/Results.vue';
import GameDays from '@/views/Game-days/Game-days.vue';
import Teams from '@/views/Teams/Teams.vue';
import Ranking from '@/views/Ranking/Ranking.vue';
import TeamView from '@/views/Teams/View.vue';
import TeamsAdd from '@/views/Teams/Add.vue';
import TeamsEdit from '@/views/Teams/Edit.vue';
import Error404 from '@/views/Error/404.vue';

export const routes = [
    {
        name: 'ranking',
        path: '/ranking',
        alias: '/',
        component: Ranking
    },
    {
        name: 'about',
        path: '/about',
        component: About
    },
    {
        name: 'results',
        path: '/results',
        component: Results
    },
    {
        name: 'game-days',
        path: '/game-days',
        component: GameDays
    },
    {
        path: '/teams',
        component: Teams,
        children: [
            {
                name: 'teams',
                path: '',
                component: TeamView
            },
            {
                name: 'teamsEdit',
                path: 'edit/:id', // /teams/edit/1 -> id = 1
                component: TeamsEdit,
                sensitive: true
            },
            {
                name: 'teamsAdd',
                path: 'add/:id', // /teams/add/1 -> id = 1
                component: TeamsAdd,
                sensitive: true
            },
        ]
    },
    {
        name: '404error',
        path: '/:pathMatch(.*)*',
        component: Error404
    },
];