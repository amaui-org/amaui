import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTextDecrease = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextDecrease'

      short_name='TextDecrease'

      viewBox='0 0 24 24'

      {...props}
    >
      <rect fill="none" height="24" width="24"/><path d="M0.99,19h2.42l1.27-3.58h5.65L11.59,19h2.42L8.75,5h-2.5L0.99,19z M5.41,13.39L7.44,7.6h0.12l2.03,5.79H5.41z M23,11v2h-8 v-2H23z"/>
    </Icon>
  );
});

IconMaterialTextDecrease.displayName = 'AmauiIconMaterialTextDecrease';

export default IconMaterialTextDecrease;
