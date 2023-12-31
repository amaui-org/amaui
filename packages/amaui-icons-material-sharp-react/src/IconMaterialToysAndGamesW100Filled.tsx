import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialToysAndGamesW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ToysAndGamesW100Filled'

      short_name='ToysAndGames'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-226q0-8 4-15t12-7q4 0 7.5 1t6.5 3q9 4 18.5 5t19.5 1q51 0 85.5-35.5T360-360q0-50-35-84t-85-34q-8 0-16 1t-16 3q-5 1-10 1.5t-10 .5q-8 0-12-6t-4-14v-68q0-11 8.5-19.5T200-588h182q8 0 10-8t-6-16q-17-17-25.5-40t-8.5-48q0-54 37-91t91-37q54 0 91 37t37 91q0 25-8.5 48T574-612q-8 8-6 16t10 8h182q11 0 19.5 8.5T788-560v46q0 14-1.5 28T772-472h-12q-6 0-12-2-7-2-14-3t-14-1q-50 0-85 34t-35 84q0 51 34.5 86.5T720-238q9 0 18.5-1t17.5-5q4-2 7.5-3t8.5-1q8 0 12 7t4 15v66q0 11-8.5 19.5T760-132H200q-11 0-19.5-8.5T172-160v-66Z"/>
    </Icon>
  );
});

IconMaterialToysAndGamesW100Filled.displayName = 'AmauiIconMaterialToysAndGamesW100Filled';

export default IconMaterialToysAndGamesW100Filled;
