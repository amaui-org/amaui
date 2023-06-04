import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPowerOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PowerOffFilled'

      short_name='PowerOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.5 21v-3L6 14.5V7.075h1.075v2.8L1.4 4.2l1.4-1.4 18.4 18.4-1.4 1.4-4.95-4.95-.35.35v3Zm7.65-6.7L8 5.15V3h2v4h4V3h2v4h2v6.45Z"/>
    </Icon>
  );
});

IconMaterialPowerOffFilled.displayName = 'AmauiIconMaterialPowerOffFilled';

export default IconMaterialPowerOffFilled;
