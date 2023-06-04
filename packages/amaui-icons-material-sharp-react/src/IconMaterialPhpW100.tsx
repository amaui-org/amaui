import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPhpW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhpW100'

      short_name='Php'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.15 14.6V9.4h.7v2h2.8v-2h.7v5.2h-.7v-2.5h-2.8v2.5Zm-6.6 0V9.4h4.2v3.3h-3.5v1.9Zm.7-2.6h2.8v-1.85h-2.8Zm12.55 2.6V9.4H21v3.3h-3.5v1.9Zm.7-2.6h2.8v-1.85h-2.8Z"/>
    </Icon>
  );
});

IconMaterialPhpW100.displayName = 'AmauiIconMaterialPhpW100';

export default IconMaterialPhpW100;
