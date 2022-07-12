import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBorderAllSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BorderAllSharpFilled'
      short_name='BorderAll'

      {...props}
    >
      <path d="M13 3H21V11H13ZM13 21V13H21V21ZM3 11V3H11V11ZM3 21V13H11V21Z"/>
    </Icon>
  )
});

export default IconMaterialBorderAllSharpFilled;
