import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAmbientScreenW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AmbientScreenW100Filled'

      short_name='AmbientScreen'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m748 828-40-18q-9-4-9-14t9-14l40-18 18-40q4-9 14-9t14 9l18 40 40 18q9 4 9 14t-9 14l-40 18-18 40q-4 9-14 9t-14-9l-18-40ZM440 616l26 59q4 9 14 9t14-9l26-59 59-26q9-4 9-14t-9-14l-59-26-26-59q-4-9-14-9t-14 9l-26 59-59 26q-9 4-9 14t9 14l59 26ZM192 844q-25 0-42.5-17.5T132 784V368q0-25 17.5-42.5T192 308h576q25 0 42.5 17.5T828 368v232q-12-3-24-4.5t-24-1.5q-85 0-143.5 58.5T578 796q0 12 1.5 24t4.5 24H192Z"/>
    </Icon>
  );
});

IconMaterialAmbientScreenW100Filled.displayName = 'AmauiIconMaterialAmbientScreenW100Filled';

export default IconMaterialAmbientScreenW100Filled;
