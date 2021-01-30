import { defineConfig } from 'umi';
import CONFIG from './config';

export default defineConfig({
    nodeModulesTransform: {
        type: 'none',
    },
    title: false,
    metas: CONFIG.metas,
    favicon: CONFIG.favicon,
    analytics: CONFIG.analytics,
    hash: true,
    publicPath: CONFIG.publicPath,
    routes: [{ path: '/', component: '@/pages/index' }],
    fastRefresh: {},
});
