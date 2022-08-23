import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialStayPrimaryLandscapeSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='StayPrimaryLandscapeSharpW100'
      short_name='StayPrimaryLandscape'

      {...props}
    >
      <path d="M2.3 17.7V6.3H21.7V17.7ZM5.35 17H18.65V7H5.35ZM3 17H4.65V7H3ZM19.35 17H21V7H19.35ZM3 7H4.65ZM19.35 7H21Z"/>
    </Icon>
  );
});

IconMaterialStayPrimaryLandscapeSharpW100.displayName = 'AmauiIconMaterialStayPrimaryLandscapeSharpW100';

export default IconMaterialStayPrimaryLandscapeSharpW100;
