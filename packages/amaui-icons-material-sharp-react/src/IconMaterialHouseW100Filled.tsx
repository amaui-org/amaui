import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHouseW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HouseW100Filled'

      short_name='House'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.3 18.7v-8h-.9L12 4.75l3.8 3.45V6H17v3.25l1.6 1.45h-.9v8h-4.075v-5h-3.25v5Zm3.95-8.7h3.5q0-.675-.525-1.113Q12.7 8.45 12 8.45q-.7 0-1.225.437-.525.438-.525 1.113Z"/>
    </Icon>
  );
});

IconMaterialHouseW100Filled.displayName = 'AmauiIconMaterialHouseW100Filled';

export default IconMaterialHouseW100Filled;
