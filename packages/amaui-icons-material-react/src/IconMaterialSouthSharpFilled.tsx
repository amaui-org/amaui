import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSouthSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SouthSharpFilled'
      short_name='South'

      {...props}
    >
      <path d="M12 22 5 15 6.4 13.575 11 18.175V2H13V18.175L17.6 13.6L19 15Z"/>
    </Icon>
  )
});

export default IconMaterialSouthSharpFilled;
