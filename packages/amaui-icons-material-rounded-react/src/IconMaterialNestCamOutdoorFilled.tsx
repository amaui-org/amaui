import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNestCamOutdoorFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestCamOutdoorFilled'

      short_name='NestCamOutdoor'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.8 20.025q-.35 0-.65-.125-.3-.125-.575-.35L7.35 16.025q-.65-.55-1.125-1.225t-.775-1.425q-.275.275-.65.45T4 14H2V6h2q.725 0 1.288.463.562.462.687 1.162Q7.05 6 8.575 5.25 10.1 4.5 11.65 4.5q1.175 0 2.15.4.975.4 1.85 1.125L19.9 9.55q.325.275.525.675t.2.825q0 .325-.1.65t-.375.65l-5.75 6.925q-.3.35-.75.55-.45.2-.85.2Z"/>
    </Icon>
  );
});

IconMaterialNestCamOutdoorFilled.displayName = 'AmauiIconMaterialNestCamOutdoorFilled';

export default IconMaterialNestCamOutdoorFilled;
