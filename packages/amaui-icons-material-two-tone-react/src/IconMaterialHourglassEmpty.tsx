import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHourglassEmpty = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HourglassEmpty'

      short_name='HourglassEmpty'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M18 2H6v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2zm-2 14.5V20H8v-3.5l4-4 4 4zm0-9l-4 4-4-4V4h8v3.5z"/>
    </Icon>
  );
});

IconMaterialHourglassEmpty.displayName = 'AmauiIconMaterialHourglassEmpty';

export default IconMaterialHourglassEmpty;
