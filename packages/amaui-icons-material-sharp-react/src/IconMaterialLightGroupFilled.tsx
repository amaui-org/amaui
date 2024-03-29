import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLightGroupFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LightGroupFilled'

      short_name='LightGroup'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 22v-2h8v2Zm14-1q-.825 0-1.412-.587Q15 19.825 15 19h-4v-1q-.05-2.25 1.4-3.9t3.6-2V2h2v10.1q2.175.35 3.613 2Q23.05 15.75 23 18v1h-4q0 .825-.575 1.413Q17.85 21 17 21ZM6 19v-8H.725l2.4-9H10.9l2.4 9H8v8Z"/>
    </Icon>
  );
});

IconMaterialLightGroupFilled.displayName = 'AmauiIconMaterialLightGroupFilled';

export default IconMaterialLightGroupFilled;
