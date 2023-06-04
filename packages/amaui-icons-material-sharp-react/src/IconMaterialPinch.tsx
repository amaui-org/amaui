import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPinch = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Pinch'

      short_name='Pinch'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M1 11V6h1.5v2.45L8.45 2.5H6V1h5v5H9.5V3.55L3.55 9.5H6V11Zm11.825 12-5.75-5.75L9.25 15l2.875.65V7.5q0-1.05.725-1.775Q13.575 5 14.625 5q1.05 0 1.775.725.725.725.725 1.775v4.3h.8l5.3 2.575L21.8 23Zm.85-2h6.4l.95-5.45-4.15-2.05h-1.75v-6q0-.225-.137-.363Q14.85 7 14.625 7q-.225 0-.363.137-.137.138-.137.363v10.6l-4.25-.9Zm0 0h6.4Z"/>
    </Icon>
  );
});

IconMaterialPinch.displayName = 'AmauiIconMaterialPinch';

export default IconMaterialPinch;
