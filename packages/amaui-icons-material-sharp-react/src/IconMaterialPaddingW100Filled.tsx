import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPaddingW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PaddingW100Filled'

      short_name='Padding'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.45 8.85h1.4v-1.4h-1.4Zm3.85 0h1.4v-1.4h-1.4Zm3.85 0h1.4v-1.4h-1.4ZM4.3 19.7V4.3h15.4v15.4Z"/>
    </Icon>
  );
});

IconMaterialPaddingW100Filled.displayName = 'AmauiIconMaterialPaddingW100Filled';

export default IconMaterialPaddingW100Filled;
