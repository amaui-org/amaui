import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWorkSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WorkSharpFilled'
      short_name='Work'

      {...props}
    >
      <path d="M2 21V6H8V2H16V6H22V21ZM10 6H14V4H10Z"/>
    </Icon>
  );
});

export default IconMaterialWorkSharpFilled;
