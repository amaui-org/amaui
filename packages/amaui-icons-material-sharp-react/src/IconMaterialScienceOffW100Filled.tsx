import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialScienceOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScienceOffW100Filled'

      short_name='ScienceOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M548-518 412-654v-106h-74v-28h284v28h-74v242Zm214 368-22-22H200q-18 0-25.5-16t3.5-30l233-283-263-263 20-20 614 614-20 20Z"/>
    </Icon>
  );
});

IconMaterialScienceOffW100Filled.displayName = 'AmauiIconMaterialScienceOffW100Filled';

export default IconMaterialScienceOffW100Filled;
