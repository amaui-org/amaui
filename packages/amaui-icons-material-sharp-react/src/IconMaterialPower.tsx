import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPower = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Power'

      short_name='Power'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.5 19h1v-1.85l3.5-3.5V9H8v4.65l3.5 3.5Zm-2 2v-3L6 14.5V7h2V3h2v4h4V3h2v4h2v7.5L14.5 18v3Zm2.5-7Z"/>
    </Icon>
  );
});

IconMaterialPower.displayName = 'AmauiIconMaterialPower';

export default IconMaterialPower;
