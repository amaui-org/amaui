import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPowerOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PowerOff'

      short_name='PowerOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.5 21v-3L6 14.5V7h1l2 2H8v4.65l3.5 3.5V19h1v-1.85l.925-.925L1.4 4.2l1.4-1.4 18.4 18.4-1.4 1.4-4.95-4.95-.35.35v3Zm7.65-6.7L16 13.15V9h-4.15L8 5.15V3h2v4h4V3h2v4h2v6.45Zm-3.2-3.2Zm-3.25 2.425Z"/>
    </Icon>
  );
});

IconMaterialPowerOff.displayName = 'AmauiIconMaterialPowerOff';

export default IconMaterialPowerOff;
