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
      <path d="M474 354q0 23-15.5 38.5T420 408q-12 0-22.5-5T379 389q-30 8-52 29t-30 50h487l-33 202H628l9-96H323l9 96H209l-33-202h93q8-38 34-66t64-38q-1-2-1-5v-5q0-23 15.5-38.5T420 300q23 0 38.5 15.5T474 354Zm-94 516h200l26-268H354l26 268Z"/>
    </Icon>
  );
});

IconMaterialPodiumW100Filled.displayName = 'AmauiIconMaterialPodiumW100Filled';

export default IconMaterialPodiumW100Filled;
