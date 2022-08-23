import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEditOffSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditOffSharpW100'
      short_name='EditOff'

      {...props}
    >
      <path d="M19.3 21.2 12.175 14.075 6.55 19.7H4.575V17.725L10.2 12.1L2.8 4.7L3.3 4.2L19.8 20.7ZM5.275 19H6.25L11.675 13.575L11.2 13.075L10.7 12.6L5.275 18.025ZM11.675 13.575 11.2 13.075 10.7 12.6 11.675 13.575ZM14.075 12.175 13.575 11.675 16.525 8.725 15.55 7.75 12.6 10.7 12.1 10.2 15.55 6.75 17.525 8.725ZM18.025 8.225 16.05 6.25 17.725 4.575 19.7 6.55ZM13.1 11.175Z"/>
    </Icon>
  );
});

IconMaterialEditOffSharpW100.displayName = 'AmauiIconMaterialEditOffSharpW100';

export default IconMaterialEditOffSharpW100;
