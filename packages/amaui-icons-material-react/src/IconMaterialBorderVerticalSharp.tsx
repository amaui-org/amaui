import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBorderVerticalSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BorderVerticalSharp'
      short_name='BorderVertical'

      {...props}
    >
      <path d="M3 21V19H5V21ZM3 17V15H5V17ZM3 13V11H5V13ZM3 9V7H5V9ZM3 5V3H5V5ZM7 21V19H9V21ZM7 13V11H9V13ZM7 5V3H9V5ZM11 21V3H13V21ZM15 21V19H17V21ZM15 13V11H17V13ZM15 5V3H17V5ZM19 21V19H21V21ZM19 17V15H21V17ZM19 13V11H21V13ZM19 9V7H21V9ZM19 5V3H21V5Z"/>
    </Icon>
  );
});

IconMaterialBorderVerticalSharp.displayName = 'AmauiIconMaterialBorderVerticalSharp';

export default IconMaterialBorderVerticalSharp;
