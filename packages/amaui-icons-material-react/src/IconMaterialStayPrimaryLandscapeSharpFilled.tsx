import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialStayPrimaryLandscapeSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='StayPrimaryLandscapeSharpFilled'
      short_name='StayPrimaryLandscape'

      {...props}
    >
      <path d="M1 19V5H23V19ZM6 17H18V7H6Z"/>
    </Icon>
  );
});

export default IconMaterialStayPrimaryLandscapeSharpFilled;
