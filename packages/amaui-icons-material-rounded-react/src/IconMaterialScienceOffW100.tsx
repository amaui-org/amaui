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
      <path d="m548-518-28-28v-214h-80v134l-28-28v-106h-60q-6 0-10-4t-4-10q0-6 4-10t10-4h256q6 0 10 4t4 10q0 6-4 10t-10 4h-60v242ZM200-200h512L431-481 200-200Zm552 40-12-12H200q-18 0-25.5-16t3.5-30l233-283-253-253q-4-4-4.5-9.5T158-774q5-5 10-5t10 5l594 594q4 4 4.5 9.5T772-160q-5 5-10 5t-10-5ZM431-481Zm49-105Z"/>
    </Icon>
  );
});

IconMaterialScienceOffW100.displayName = 'AmauiIconMaterialScienceOffW100';

export default IconMaterialScienceOffW100;
