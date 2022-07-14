import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialStayCurrentLandscapeSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='StayCurrentLandscapeSharp'
      short_name='StayCurrentLandscape'

      {...props}
    >
      <path d="M1 19V5H23V19ZM6 17H18V7H6ZM3 17H4V7H3ZM20 17H21V7H20ZM3 7H4ZM20 7H21Z"/>
    </Icon>
  );
});

export default IconMaterialStayCurrentLandscapeSharp;
