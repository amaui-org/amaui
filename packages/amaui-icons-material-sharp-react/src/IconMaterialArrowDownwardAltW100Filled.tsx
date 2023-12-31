import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArrowDownwardAltW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowDownwardAltW100Filled'

      short_name='ArrowDownwardAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-276 276-480l20-20 170 170v-404h28v404l170-170 20 20-204 204Z"/>
    </Icon>
  );
});

IconMaterialArrowDownwardAltW100Filled.displayName = 'AmauiIconMaterialArrowDownwardAltW100Filled';

export default IconMaterialArrowDownwardAltW100Filled;
