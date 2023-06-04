import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNoFoodW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoFoodW100Filled'

      short_name='NoFood'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m19.925 18.45-7.975-8-.525-3.65h4.5v-4h.7v4h4.5Zm-17.05.15v-.7h12.7v.7Zm0 3.1V21h12.7v.7Zm17.1.6-6.8-6.8h-10.3q0-1.35 1.625-2.525Q6.125 11.8 9.225 11.8q.35 0 .688.012.337.013.637.063v1L.925 3.25l.5-.5 19.05 19.05Z"/>
    </Icon>
  );
});

IconMaterialNoFoodW100Filled.displayName = 'AmauiIconMaterialNoFoodW100Filled';

export default IconMaterialNoFoodW100Filled;
