import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArrowUpwardAltW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowUpwardAltW100Filled'

      short_name='ArrowUpwardAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-276v-404L296-510l-20-20 204-204 204 204-20 20-170-170v404h-28Z"/>
    </Icon>
  );
});

IconMaterialArrowUpwardAltW100Filled.displayName = 'AmauiIconMaterialArrowUpwardAltW100Filled';

export default IconMaterialArrowUpwardAltW100Filled;
