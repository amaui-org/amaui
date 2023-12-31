import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHourglassFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HourglassFilled'

      short_name='Hourglass'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-80v-80h80v-120q0-61 28.5-114.5T348-480q-51-32-79.5-85.5T240-680v-120h-80v-80h640v80h-80v120q0 61-28.5 114.5T612-480q51 32 79.5 85.5T720-280v120h80v80H160Z"/>
    </Icon>
  );
});

IconMaterialHourglassFilled.displayName = 'AmauiIconMaterialHourglassFilled';

export default IconMaterialHourglassFilled;
