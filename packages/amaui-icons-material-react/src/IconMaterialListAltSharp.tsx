import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialListAltSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ListAltSharp'
      short_name='ListAlt'

      {...props}
    >
      <path d="M7 17H9V15H7ZM7 13H9V11H7ZM7 9H9V7H7ZM11 17H17V15H11ZM11 13H17V11H11ZM11 9H17V7H11ZM3 21V3H21V21ZM5 19H19V5H5ZM5 19V5V19Z"/>
    </Icon>
  );
});

IconMaterialListAltSharp.displayName = 'AmauiIconMaterialListAltSharp';

export default IconMaterialListAltSharp;
