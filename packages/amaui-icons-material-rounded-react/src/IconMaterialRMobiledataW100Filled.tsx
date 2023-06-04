import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRMobiledataW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RMobiledataW100Filled'

      short_name='RMobiledata'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.375 9.15 6.3 6.7H3.35V9q0 .15-.1.25t-.25.1q-.15 0-.25-.1T2.65 9V3.4q0-.325.213-.538.212-.212.537-.212h3.45q.65 0 1.075.425.425.425.425 1.075v1.2q0 .425-.375.825-.375.4-.925.475L8 8.875q.1.2 0 .337-.1.138-.325.138-.1 0-.175-.063-.075-.062-.125-.137ZM3.35 6h3.5q.35 0 .575-.225.225-.225.225-.575V4.15q0-.35-.225-.575Q7.2 3.35 6.85 3.35h-3.5Z"/>
    </Icon>
  );
});

IconMaterialRMobiledataW100Filled.displayName = 'AmauiIconMaterialRMobiledataW100Filled';

export default IconMaterialRMobiledataW100Filled;
