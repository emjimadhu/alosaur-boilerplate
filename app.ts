import { App } from 'alosaur/mod.ts';

import { HomeArea } from './src/areas/home/home.area.ts';
import { InfoArea } from './src/areas/info/info.area.ts';
import { Log } from './src/middlwares/log.middlware.ts';

const app = new App({
  areas: [HomeArea, InfoArea],
  middlewares: [Log]
});

app.listen();
