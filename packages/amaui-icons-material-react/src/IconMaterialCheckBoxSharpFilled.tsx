import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCheckBoxSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CheckBoxSharpFilled'
      short_name='CheckBox'

      {...props}
    >
      <path d="M10.6 16.2 17.65 9.15 16.25 7.75 10.6 13.4 7.75 10.55 6.35 11.95ZM3 21V3H21V21Z"/>
    </Icon>
  );
});

export default IconMaterialCheckBoxSharpFilled;
