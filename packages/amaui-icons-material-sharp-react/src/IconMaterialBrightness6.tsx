import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBrightness6 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Brightness6'

      short_name='Brightness6'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 23.3 8.65 20H4v-4.65L.7 12 4 8.65V4h4.65L12 .7 15.35 4H20v4.65L23.3 12 20 15.35V20h-4.65Zm0-5.3q2.5 0 4.25-1.75T18 12q0-2.5-1.75-4.25T12 6Zm0 2.5 2.5-2.5H18v-3.5l2.5-2.5L18 9.5V6h-3.5L12 3.5 9.5 6H6v3.5L3.5 12 6 14.5V18h3.5Zm0-8.5Z"/>
    </Icon>
  );
});

IconMaterialBrightness6.displayName = 'AmauiIconMaterialBrightness6';

export default IconMaterialBrightness6;
