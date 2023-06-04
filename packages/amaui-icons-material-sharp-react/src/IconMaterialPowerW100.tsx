import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPowerW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PowerW100'

      short_name='Power'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.2 19h1.6v-2.15l3.2-3.2V9H8v4.65l3.2 3.2Zm-.7.7v-2.55l-3.2-3.2V8.3h2.45v-4h.7v4h3.1v-4h.7v4h2.45v5.65l-3.2 3.2v2.55ZM12 14Z"/>
    </Icon>
  );
});

IconMaterialPowerW100.displayName = 'AmauiIconMaterialPowerW100';

export default IconMaterialPowerW100;
