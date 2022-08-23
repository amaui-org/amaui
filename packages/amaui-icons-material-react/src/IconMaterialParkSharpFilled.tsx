import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialParkSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ParkSharpFilled'
      short_name='Park'

      {...props}
    >
      <path d="M13.95 22H10.05V18H3L7 12H5L12 2L19 12H17L21 18H13.95Z"/>
    </Icon>
  );
});

IconMaterialParkSharpFilled.displayName = 'AmauiIconMaterialParkSharpFilled';

export default IconMaterialParkSharpFilled;
