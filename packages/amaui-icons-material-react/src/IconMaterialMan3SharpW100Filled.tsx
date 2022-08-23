import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMan3SharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Man3SharpW100Filled'
      short_name='Man3'

      {...props}
    >
      <path d="M10.3 21.6v-6.45H8.6V7.8h6.8v7.35h-1.7v6.45ZM12 6.25 10.15 4.4 12 2.55l1.85 1.85Z"/>
    </Icon>
  );
});

IconMaterialMan3SharpW100Filled.displayName = 'AmauiIconMaterialMan3SharpW100Filled';

export default IconMaterialMan3SharpW100Filled;
