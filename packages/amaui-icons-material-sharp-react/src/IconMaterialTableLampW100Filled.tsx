import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTableLampW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TableLampW100Filled'

      short_name='TableLamp'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13 20.35v-.7h6.7v.7Zm3-2.7V6.45h-5.4V10H4.975l2.5-5.7H10.6v1.45h6.1v11.9Z"/>
    </Icon>
  );
});

IconMaterialTableLampW100Filled.displayName = 'AmauiIconMaterialTableLampW100Filled';

export default IconMaterialTableLampW100Filled;
