import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFactoryW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FactoryW100Filled'

      short_name='Factory'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.3 20.7v-9.85l4.4-1.875v1.95l5-2V11.3h8v9.4Zm8-3.3h1.4v-2.8h-1.4Zm-4 0h1.4v-2.8H7.3Zm8 0h1.4v-2.8h-1.4Zm5.3-6.8h-2.35l.9-6.3h.7Z"/>
    </Icon>
  );
});

IconMaterialFactoryW100Filled.displayName = 'AmauiIconMaterialFactoryW100Filled';

export default IconMaterialFactoryW100Filled;
