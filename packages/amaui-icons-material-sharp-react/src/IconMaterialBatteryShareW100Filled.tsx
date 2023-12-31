import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBatteryShareW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryShareW100Filled'

      short_name='BatteryShare'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M326-142v-615h90v-60h128v60h90v114h-28v-87H354v560h252v-67h28v95H326Zm108-164v-148h255l-89-90 20-19 123 123-123 123-20-20 90-89H462v120h-28Z"/>
    </Icon>
  );
});

IconMaterialBatteryShareW100Filled.displayName = 'AmauiIconMaterialBatteryShareW100Filled';

export default IconMaterialBatteryShareW100Filled;
