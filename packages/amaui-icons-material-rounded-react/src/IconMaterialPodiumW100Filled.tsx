import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPodiumW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PodiumW100Filled'

      short_name='Podium'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M474 354q0 23-15.5 38.5T420 408q-12 0-22.5-5T379 389q-30 8-52 29t-30 50h452q14 0 22.5 10.5T778 503l-22 142q-2 11-10.5 18t-19.5 7h-98l1-15q3-32-18.5-56.5T556 574H404q-33 0-54.5 24.5T331 655l1 15h-98q-11 0-19.5-7T204 645l-22-142q-2-14 6.5-24.5T211 468h58q8-38 34-66t64-38q-1-2-1-5v-5q0-23 15.5-38.5T420 300q23 0 38.5 15.5T474 354Zm-67 516h146q11 0 20-8t10-19l18-191q2-20-11.5-35T556 602H404q-20 0-33.5 15T359 652l18 191q1 11 10 19t20 8Z"/>
    </Icon>
  );
});

IconMaterialPodiumW100Filled.displayName = 'AmauiIconMaterialPodiumW100Filled';

export default IconMaterialPodiumW100Filled;
