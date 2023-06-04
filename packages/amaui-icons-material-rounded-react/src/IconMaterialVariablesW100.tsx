import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVariablesW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VariablesW100'

      short_name='Variables'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19 12.7h-2.65q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1H19V9.35q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25V12h2.65q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1H19.7v2.65q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25Zm-5.5 0H5.05q-.325 0-.537-.213-.213-.212-.213-.537v-5.9q0-.325.213-.538.212-.212.537-.212h13.9q.325 0 .538.212.212.213.212.538v.45H19V6H5v6h8.5ZM5 9.5V6v6-2.5Z"/>
    </Icon>
  );
});

IconMaterialVariablesW100.displayName = 'AmauiIconMaterialVariablesW100';

export default IconMaterialVariablesW100;
