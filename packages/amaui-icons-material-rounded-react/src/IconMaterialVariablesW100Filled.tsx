import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVariablesW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VariablesW100Filled'

      short_name='Variables'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19.35 15.7q-.15 0-.25-.1t-.1-.25V12.7h-2.65q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1H19V9.35q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25V12h2.65q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1H19.7v2.65q0 .15-.1.25t-.25.1Zm-14.3-3q-.325 0-.537-.213-.213-.212-.213-.537v-5.9q0-.325.213-.538.212-.212.537-.212h13.9q.325 0 .538.212.212.213.212.538v.45h-1.2q-.825 0-1.413.588-.587.587-.587 1.412v1h-1q-.825 0-1.412.587-.588.588-.588 1.413v1.2Z"/>
    </Icon>
  );
});

IconMaterialVariablesW100Filled.displayName = 'AmauiIconMaterialVariablesW100Filled';

export default IconMaterialVariablesW100Filled;
