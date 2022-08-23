import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDisabledByDefaultSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DisabledByDefaultSharpFilled'
      short_name='DisabledByDefault'

      {...props}
    >
      <path d="M3 21V3H21V21ZM8.4 17 12 13.4 15.6 17 17 15.6 13.4 12 17 8.4 15.6 7 12 10.6 8.4 7 7 8.4 10.6 12 7 15.6Z"/>
    </Icon>
  );
});

IconMaterialDisabledByDefaultSharpFilled.displayName = 'AmauiIconMaterialDisabledByDefaultSharpFilled';

export default IconMaterialDisabledByDefaultSharpFilled;
