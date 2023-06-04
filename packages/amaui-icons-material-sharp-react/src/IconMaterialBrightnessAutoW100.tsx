import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBrightnessAutoW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrightnessAutoW100'

      short_name='BrightnessAuto'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.3 16h.75l1.1-2.7h3.75L15 16h.8l-3.6-9h-.35Zm2.1-3.35 1.55-4.1h.1l1.6 4.1ZM12 21.5l-2.8-2.8H5.3v-3.9L2.5 12l2.8-2.8V5.3h3.9L12 2.5l2.8 2.8h3.9v3.9l2.8 2.8-2.8 2.8v3.9h-3.9Zm0-9.5Zm0 8.5 2.5-2.5H18v-3.5l2.5-2.5L18 9.5V6h-3.5L12 3.5 9.5 6H6v3.5L3.5 12 6 14.5V18h3.5Z"/>
    </Icon>
  );
});

IconMaterialBrightnessAutoW100.displayName = 'AmauiIconMaterialBrightnessAutoW100';

export default IconMaterialBrightnessAutoW100;
