import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialToysAndGamesW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ToysAndGamesW100'

      short_name='ToysAndGames'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-160h560v-56q-10 3-19.5 4.5T720-210q-62 0-105-44.062Q572-298.125 572-360q0-61 43.475-103.5T720-506q11 0 20.5 1.5T760-500v-60H544v-63.904q17-14.096 26.5-34.219T580-700q0-42-29-71t-71-29q-42 0-71 29t-29 71q0 22 8.5 42t25.5 34.096V-560H200v60q10-3 19.5-4.5T240-506q61.05 0 104.525 42.5Q388-421 388-359.5T345-254q-43 44-105 44-11 0-20.5-1.5T200-216v56Zm588-88v116H172v-116h20q11 5 22.971 7.5Q226.941-238 240-238q49.5 0 84.75-35.25T360-358q0-49.5-35.25-84.75T240-478q-10.235 0-19.618 1.5Q211-475 202-472h-30v-116h214v-24q-17-17-25.5-40t-8.5-48q0-54 37-91t91-37q54 0 91 37t37 91q0 25-8.5 48T574-612v24h214v116h-30q-9-3-18.302-4.5T720-478q-49.5 0-84.75 35.25T600-358q0 49.5 35.25 84.75T720-238q13.264 0 25.132-2.5Q757-243 768-248h20ZM480-480Z"/>
    </Icon>
  );
});

IconMaterialToysAndGamesW100.displayName = 'AmauiIconMaterialToysAndGamesW100';

export default IconMaterialToysAndGamesW100;
