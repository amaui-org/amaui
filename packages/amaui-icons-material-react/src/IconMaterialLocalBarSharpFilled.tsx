import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLocalBarSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalBarSharpFilled'
      short_name='LocalBar'

      {...props}
    >
      <path d="M6 21V19H11V14L3 5V3H21V5L13 14V19H18V21ZM7.45 7H16.55L18.35 5H5.65Z"/>
    </Icon>
  );
});

IconMaterialLocalBarSharpFilled.displayName = 'AmauiIconMaterialLocalBarSharpFilled';

export default IconMaterialLocalBarSharpFilled;
