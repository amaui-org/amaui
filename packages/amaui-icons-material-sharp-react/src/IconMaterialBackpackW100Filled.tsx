import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBackpackW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BackpackW100Filled'

      short_name='Backpack'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.3 20.85V8q0-1.275.85-2.238Q7 4.8 8.3 4.65v-2H10v2h4v-2h1.7v2q1.3.15 2.15 1.112.85.963.85 2.238v12.85Zm10-5.5h.7v-2.7H8v.7h7.3Z"/>
    </Icon>
  );
});

IconMaterialBackpackW100Filled.displayName = 'AmauiIconMaterialBackpackW100Filled';

export default IconMaterialBackpackW100Filled;
