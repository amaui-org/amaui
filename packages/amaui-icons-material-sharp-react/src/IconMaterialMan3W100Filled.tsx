import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMan3W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Man3W100Filled'

      short_name='Man3'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.3 21.6v-6.45H8.6V7.8h6.8v7.35h-1.7v6.45ZM12 6.25 10.15 4.4 12 2.55l1.85 1.85Z"/>
    </Icon>
  );
});

IconMaterialMan3W100Filled.displayName = 'AmauiIconMaterialMan3W100Filled';

export default IconMaterialMan3W100Filled;
