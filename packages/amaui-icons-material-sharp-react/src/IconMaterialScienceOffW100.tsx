import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialScienceOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScienceOffW100'

      short_name='ScienceOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m548-518-28-28v-214h-80v134l-28-28v-106h-74v-28h284v28h-74v242ZM200-200h512L431-481 200-200Zm562 50-22-22H200q-18 0-25.5-16t3.5-30l233-283-263-263 20-20 614 614-20 20ZM431-481Zm49-105Z"/>
    </Icon>
  );
});

IconMaterialScienceOffW100.displayName = 'AmauiIconMaterialScienceOffW100';

export default IconMaterialScienceOffW100;
