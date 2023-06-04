import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBrightnessAutoW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrightnessAutoW100Filled'

      short_name='BrightnessAuto'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.3 16h.75l1.1-2.7h3.75L15 16h.8l-3.6-9h-.35Zm2.1-3.35 1.55-4.1h.1l1.6 4.1ZM12 21.5l-2.8-2.8H5.3v-3.9L2.5 12l2.8-2.8V5.3h3.9L12 2.5l2.8 2.8h3.9v3.9l2.8 2.8-2.8 2.8v3.9h-3.9Z"/>
    </Icon>
  );
});

IconMaterialBrightnessAutoW100Filled.displayName = 'AmauiIconMaterialBrightnessAutoW100Filled';

export default IconMaterialBrightnessAutoW100Filled;
