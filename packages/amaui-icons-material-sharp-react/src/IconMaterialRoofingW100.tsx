import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRoofingW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RoofingW100'

      short_name='Roofing'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.4 10.7 12 4.75l3.8 3.45V6H17v3.25l1.6 1.45h-1.05L12 5.7l-5.55 5Zm4.5 8v-4.45h4.2v4.45Zm.7-.7h2.8v-3.05h-2.8Z"/>
    </Icon>
  );
});

IconMaterialRoofingW100.displayName = 'AmauiIconMaterialRoofingW100';

export default IconMaterialRoofingW100;
