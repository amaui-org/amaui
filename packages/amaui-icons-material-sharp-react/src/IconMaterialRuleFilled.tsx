import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRuleFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RuleFilled'

      short_name='Rule'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 17v-2h9v2Zm0-8V7h9v2Zm12.4 11L13 18.6l2.6-2.6-2.6-2.6 1.4-1.4 2.6 2.6 2.6-2.6 1.4 1.4-2.6 2.6 2.6 2.6-1.4 1.4-2.6-2.6Zm2.15-9L13 7.45l1.4-1.4 2.125 2.125 4.25-4.25 1.4 1.425Z"/>
    </Icon>
  );
});

IconMaterialRuleFilled.displayName = 'AmauiIconMaterialRuleFilled';

export default IconMaterialRuleFilled;
