import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRingVolume = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RingVolume'

      short_name='RingVolume'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.025 21 .4 17.475q2.35-2.75 5.35-4.112Q8.75 12 12 12t6.238 1.363q2.987 1.362 5.362 4.112L19.975 21 16 18v-3.35q-.95-.3-1.95-.475T12 14q-1.05 0-2.05.175-1 .175-1.95.475V18Zm.175-2.6L6 17v-1.55q-.725.375-1.4.862-.675.488-1.4 1.088Zm15.6 0 1-.95q-.725-.65-1.4-1.125-.675-.475-1.4-.825V17ZM11 7.05v-5h2v5Zm6.6 2.85-1.4-1.45 3.55-3.55 1.4 1.45Zm-11.2 0L2.85 6.35l1.4-1.45L7.8 8.45ZM18 15.5Zm-12-.05Z"/>
    </Icon>
  );
});

IconMaterialRingVolume.displayName = 'AmauiIconMaterialRingVolume';

export default IconMaterialRingVolume;
