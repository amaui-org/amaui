import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBorderStyleSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BorderStyleSharpFilled'
      short_name='BorderStyle'

      {...props}
    >
      <path d="M15 21V19H17V21ZM19 21V19H21V21ZM7 21V19H9V21ZM11 21V19H13V21ZM19 17V15H21V17ZM19 13V11H21V13ZM3 21V3H21V5H5V21ZM19 9V7H21V9Z"/>
    </Icon>
  );
});

IconMaterialBorderStyleSharpFilled.displayName = 'AmauiIconMaterialBorderStyleSharpFilled';

export default IconMaterialBorderStyleSharpFilled;
