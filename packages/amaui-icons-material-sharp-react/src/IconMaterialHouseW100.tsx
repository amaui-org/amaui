import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHouseW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HouseW100'

      short_name='House'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.3 18.7v-8h-.9L12 4.75l3.8 3.45V6H17v3.25l1.6 1.45h-.9v8h-4.4v-5h-2.6v5ZM7 18h3v-5h4v5h3v-7.8l-5-4.5-5 4.5Zm3-5h4-4Zm.25-3h3.5q0-.675-.525-1.113Q12.7 8.45 12 8.45q-.7 0-1.225.437-.525.438-.525 1.113Z"/>
    </Icon>
  );
});

IconMaterialHouseW100.displayName = 'AmauiIconMaterialHouseW100';

export default IconMaterialHouseW100;
