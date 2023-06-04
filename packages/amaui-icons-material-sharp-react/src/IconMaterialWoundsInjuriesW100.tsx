import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWoundsInjuriesW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WoundsInjuriesW100'

      short_name='WoundsInjuries'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m3.9 20.575-.475-.475 2.525-2.55-2.65-.7.175-.675 2.65.7-.7-2.65.675-.175.7 2.65 4.525-4.525-2.65-.7.175-.675 2.65.7-.7-2.65.675-.175.7 2.65L16.7 6.8l-2.65-.7.175-.675 2.65.7-.7-2.65.675-.175.7 2.65 2.55-2.525.475.475-2.525 2.55 2.65.7-.175.675-2.65-.7.7 2.65-.675.175-.7-2.65-4.525 4.525 2.65.7-.175.675-2.65-.7.7 2.65-.675.175-.7-2.65L7.3 17.2l2.65.7-.175.675-2.65-.7.7 2.65-.675.175-.7-2.65Z"/>
    </Icon>
  );
});

IconMaterialWoundsInjuriesW100.displayName = 'AmauiIconMaterialWoundsInjuriesW100';

export default IconMaterialWoundsInjuriesW100;
