import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTableLampW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TableLampW100'

      short_name='TableLamp'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13 20.35v-.7h6.7v.7ZM6.05 9.3H9.9V5H7.925ZM16 17.65V6.45h-5.4V10H4.975l2.5-5.7H10.6v1.45h6.1v11.9ZM6.05 9.3H9.9Z"/>
    </Icon>
  );
});

IconMaterialTableLampW100.displayName = 'AmauiIconMaterialTableLampW100';

export default IconMaterialTableLampW100;
