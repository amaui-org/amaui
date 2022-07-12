import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialGridViewSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='GridViewSharpFilled'
      short_name='GridView'

      {...props}
    >
      <path d="M3 11V3H11V11ZM3 21V13H11V21ZM13 11V3H21V11ZM13 21V13H21V21Z"/>
    </Icon>
  )
});

export default IconMaterialGridViewSharpFilled;
