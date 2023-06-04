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
      <path d="M13.35 20.35q-.15 0-.25-.1T13 20q0-.15.1-.25t.25-.1h6q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm3-2.7q-.15 0-.25-.1t-.1-.25V8.1q0-.675-.488-1.162-.487-.488-1.162-.488H10.6v2.8q0 .325-.212.537-.213.213-.538.213H6.125q-.425 0-.637-.338-.213-.337-.038-.712L7.075 5.2q.2-.425.563-.663Q8 4.3 8.45 4.3h.65q.6 0 1.038.425.437.425.462 1.025h3.75q.975 0 1.662.688.688.687.688 1.662v9.2q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialTableLampW100Filled.displayName = 'AmauiIconMaterialTableLampW100Filled';

export default IconMaterialTableLampW100Filled;
