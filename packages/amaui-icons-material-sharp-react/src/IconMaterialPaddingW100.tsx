import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPaddingW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PaddingW100'

      short_name='Padding'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.45 8.85h1.4v-1.4h-1.4Zm3.85 0h1.4v-1.4h-1.4Zm3.85 0h1.4v-1.4h-1.4ZM4.3 19.7V4.3h15.4v15.4ZM5 19h14V5H5Zm0 0V5v14Z"/>
    </Icon>
  );
});

IconMaterialPaddingW100.displayName = 'AmauiIconMaterialPaddingW100';

export default IconMaterialPaddingW100;
