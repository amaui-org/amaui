import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBorderTopSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BorderTopSharp'
      short_name='BorderTop'

      {...props}
    >
      <path d="M7 21V19H9V21ZM7 13V11H9V13ZM11 13V11H13V13ZM11 21V19H13V21ZM3 17V15H5V17ZM3 21V19H5V21ZM3 13V11H5V13ZM3 9V7H5V9ZM11 17V15H13V17ZM19 9V7H21V9ZM19 13V11H21V13ZM3 5V3H21V5ZM19 17V15H21V17ZM15 21V19H17V21ZM11 9V7H13V9ZM19 21V19H21V21ZM15 13V11H17V13Z"/>
    </Icon>
  );
});

IconMaterialBorderTopSharp.displayName = 'AmauiIconMaterialBorderTopSharp';

export default IconMaterialBorderTopSharp;
