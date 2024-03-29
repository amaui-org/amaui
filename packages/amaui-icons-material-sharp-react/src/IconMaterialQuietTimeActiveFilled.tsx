import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialQuietTimeActiveFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='QuietTimeActiveFilled'

      short_name='QuietTimeActive'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M20.15 18.125 5.875 3.85q1.075-1.1 2.437-1.825Q9.675 1.3 11.25 1q-.45 2.475.275 4.837.725 2.363 2.5 4.138t4.138 2.5q2.362.725 4.837.275-.275 1.575-1.012 2.938-.738 1.362-1.838 2.437Zm-.775 4.925-2.7-2.7q-.85.325-1.737.487Q14.05 21 13.1 21q-2.1 0-3.938-.8-1.837-.8-3.199-2.162-1.363-1.363-2.163-3.2Q3 13 3 10.9q0-.95.163-1.838.162-.887.487-1.737L.975 4.65 2.4 3.225l18.4 18.4Z"/>
    </Icon>
  );
});

IconMaterialQuietTimeActiveFilled.displayName = 'AmauiIconMaterialQuietTimeActiveFilled';

export default IconMaterialQuietTimeActiveFilled;
