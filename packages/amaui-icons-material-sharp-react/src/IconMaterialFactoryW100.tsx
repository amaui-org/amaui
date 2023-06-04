import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFactoryW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FactoryW100'

      short_name='Factory'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.3 20.7v-9.85l4.4-1.875v1.95l5-2V11.3h8v9.4ZM4 20h16v-8h-8V9.95l-5 2V10l-3 1.325Zm7.3-2.6h1.4v-2.8h-1.4Zm-4 0h1.4v-2.8H7.3Zm8 0h1.4v-2.8h-1.4Zm5.4-6.1h-2.55l1-7h.7ZM4 20h16Z"/>
    </Icon>
  );
});

IconMaterialFactoryW100.displayName = 'AmauiIconMaterialFactoryW100';

export default IconMaterialFactoryW100;
