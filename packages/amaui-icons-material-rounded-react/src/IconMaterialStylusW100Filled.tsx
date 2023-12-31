import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStylusW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StylusW100Filled'

      short_name='Stylus'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M211-176q-16 3-27-8t-8-27l23-112 124 124-112 23Zm132-42L218-343l415-414q17-17 42-17t42 17l40 40q17 17 17 42t-17 42L343-218Z"/>
    </Icon>
  );
});

IconMaterialStylusW100Filled.displayName = 'AmauiIconMaterialStylusW100Filled';

export default IconMaterialStylusW100Filled;
