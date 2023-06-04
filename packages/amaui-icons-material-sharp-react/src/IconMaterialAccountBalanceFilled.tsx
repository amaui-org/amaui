import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAccountBalanceFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AccountBalanceFilled'

      short_name='AccountBalance'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 17v-7h2v7Zm6 0v-7h2v7Zm-9 4v-2h20v2Zm15-4v-7h2v7ZM2 8V6l10-5 10 5v2Z"/>
    </Icon>
  );
});

IconMaterialAccountBalanceFilled.displayName = 'AmauiIconMaterialAccountBalanceFilled';

export default IconMaterialAccountBalanceFilled;
