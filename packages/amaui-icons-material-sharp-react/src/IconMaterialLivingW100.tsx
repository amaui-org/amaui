import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLivingW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LivingW100'

      short_name='Living'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.3 20.7V3.3h17.4v17.4ZM4 20h16V4H4Zm1.8-2.8h12.4v-6.85h-1.25V7.3h-9.9v3.05H5.8Zm.7-.7V11h2v3h7v-3h2v5.5Zm2.7-3.2v-2.95H7.75V8h8.5v2.35H14.8v2.95ZM4 20V4v16Z"/>
    </Icon>
  );
});

IconMaterialLivingW100.displayName = 'AmauiIconMaterialLivingW100';

export default IconMaterialLivingW100;
