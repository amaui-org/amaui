import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTableLampFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TableLampFilled'

      short_name='TableLamp'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13 21v-2h8v2Zm3-3V7h-5v4H2.475l3.5-8H11v2h7v13Z"/>
    </Icon>
  );
});

IconMaterialTableLampFilled.displayName = 'AmauiIconMaterialTableLampFilled';

export default IconMaterialTableLampFilled;
