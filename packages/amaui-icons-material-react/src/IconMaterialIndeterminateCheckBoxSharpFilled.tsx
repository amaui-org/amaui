import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialIndeterminateCheckBoxSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='IndeterminateCheckBoxSharpFilled'
      short_name='IndeterminateCheckBox'

      {...props}
    >
      <path d="M7 13H17V11H7ZM3 21V3H21V21Z"/>
    </Icon>
  );
});

export default IconMaterialIndeterminateCheckBoxSharpFilled;
