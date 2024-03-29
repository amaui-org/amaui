import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLightGroup = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LightGroup'

      short_name='LightGroup'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 22v-2h8v2Zm14-1q-.825 0-1.412-.587Q15 19.825 15 19h-4v-1q-.05-2.25 1.4-3.9t3.6-2V2h2v10.1q2.175.35 3.613 2Q23.05 15.75 23 18v1h-4q0 .825-.575 1.413Q17.85 21 17 21ZM6 19v-8H.725l2.4-9H10.9l2.4 9H8v8Zm7.1-2h7.8q-.3-1.35-1.4-2.175Q18.4 14 17 14q-1.375 0-2.475.825T13.1 17ZM3.3 9h7.4L9.375 4H4.65ZM7 6.5Zm10 9Z"/>
    </Icon>
  );
});

IconMaterialLightGroup.displayName = 'AmauiIconMaterialLightGroup';

export default IconMaterialLightGroup;
