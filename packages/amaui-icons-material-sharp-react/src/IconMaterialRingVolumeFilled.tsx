import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRingVolumeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RingVolumeFilled'

      short_name='RingVolume'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.025 21 .4 17.475q2.35-2.75 5.35-4.112Q8.75 12 12 12t6.238 1.363q2.987 1.362 5.362 4.112L19.975 21 16 18v-3.35q-.95-.3-1.95-.475T12 14q-1.05 0-2.05.175-1 .175-1.95.475V18ZM11.05 7.05v-5h2v5Zm6.6 2.85-1.4-1.45L19.8 4.9l1.4 1.45Zm-11.2 0L2.9 6.35 4.3 4.9l3.55 3.55Z"/>
    </Icon>
  );
});

IconMaterialRingVolumeFilled.displayName = 'AmauiIconMaterialRingVolumeFilled';

export default IconMaterialRingVolumeFilled;
