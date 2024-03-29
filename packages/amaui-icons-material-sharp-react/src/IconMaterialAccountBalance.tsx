import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAccountBalance = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AccountBalance'

      short_name='AccountBalance'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 17v-7h2v7Zm6 0v-7h2v7Zm-9 4v-2h20v2Zm15-4v-7h2v7ZM2 8V6l10-5 10 5v2Zm4.45-2h11.1Zm0 0h11.1L12 3.25Z"/>
    </Icon>
  );
});

IconMaterialAccountBalance.displayName = 'AmauiIconMaterialAccountBalance';

export default IconMaterialAccountBalance;
