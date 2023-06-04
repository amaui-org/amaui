import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWarningOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WarningOffW100Filled'

      short_name='WarningOff'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M480 796q8.5 0 14.25-5.75T500 776q0-8.5-5.75-14.25T480 756q-8.5 0-14.25 5.75T460 776q0 8.5 5.75 14.25T480 796Zm252-81L413 396l67-116 252 435Zm77 230-61-61H130l227-391-247-247 20-20 699 699-20 20ZM466 716h28v-86l-28-28v114Z"/>
    </Icon>
  );
});

IconMaterialWarningOffW100Filled.displayName = 'AmauiIconMaterialWarningOffW100Filled';

export default IconMaterialWarningOffW100Filled;
