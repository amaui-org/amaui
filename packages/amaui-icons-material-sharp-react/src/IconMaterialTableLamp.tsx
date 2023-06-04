import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTableLamp = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TableLamp'

      short_name='TableLamp'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13 21v-2h8v2ZM5.525 9H9V5H7.275ZM16 18V7h-5v4H2.475l3.5-8H11v2h7v13ZM5.525 9H9Z"/>
    </Icon>
  );
});

IconMaterialTableLamp.displayName = 'AmauiIconMaterialTableLamp';

export default IconMaterialTableLamp;
