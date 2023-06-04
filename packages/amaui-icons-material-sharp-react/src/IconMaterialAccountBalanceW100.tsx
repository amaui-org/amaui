import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAccountBalanceW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AccountBalanceW100'

      short_name='AccountBalance'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.95 17V8.7h.7V17Zm4.7 0V8.7h.7V17ZM4 19.7V19h16v.7ZM16.35 17V8.7h.7V17ZM4 6.7v-.5l8-3.75 8 3.75v.5ZM6.1 6h11.8Zm0 0h11.8L12 3.25Z"/>
    </Icon>
  );
});

IconMaterialAccountBalanceW100.displayName = 'AmauiIconMaterialAccountBalanceW100';

export default IconMaterialAccountBalanceW100;
