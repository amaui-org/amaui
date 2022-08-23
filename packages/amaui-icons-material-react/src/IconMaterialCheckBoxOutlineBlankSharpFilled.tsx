import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCheckBoxOutlineBlankSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CheckBoxOutlineBlankSharpFilled'
      short_name='CheckBoxOutlineBlank'

      {...props}
    >
      <path d="M3 21V3H21V21ZM5 19H19V5H5Z"/>
    </Icon>
  );
});

IconMaterialCheckBoxOutlineBlankSharpFilled.displayName = 'AmauiIconMaterialCheckBoxOutlineBlankSharpFilled';

export default IconMaterialCheckBoxOutlineBlankSharpFilled;
