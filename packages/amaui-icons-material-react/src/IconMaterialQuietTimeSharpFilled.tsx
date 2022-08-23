import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialQuietTimeSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='QuietTimeSharpFilled'
      short_name='QuietTime'

      {...props}
    >
      <path d="M13.1 23q-2.1 0-3.938-.8-1.837-.8-3.199-2.162Q4.6 18.675 3.8 16.837 3 15 3 12.9q0-3.65 2.325-6.438Q7.65 3.675 11.25 3q-.45 2.475.275 4.837.725 2.363 2.5 4.138t4.138 2.5q2.362.725 4.837.275-.65 3.6-3.45 5.925Q16.75 23 13.1 23Z"/>
    </Icon>
  );
});

IconMaterialQuietTimeSharpFilled.displayName = 'AmauiIconMaterialQuietTimeSharpFilled';

export default IconMaterialQuietTimeSharpFilled;
