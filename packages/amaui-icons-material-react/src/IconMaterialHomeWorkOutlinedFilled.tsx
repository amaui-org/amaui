import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHomeWorkOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomeWorkOutlinedFilled'
      short_name='HomeWork'

      {...props}
    >
      <path d="M1 21V11L8 6L15 11V21H10V15H6V21ZM17 9H19V7H17ZM17 13H19V11H17ZM17 17H19V15H17ZM17 21V10L10 4.95V3H23V21Z"/>
    </Icon>
  )
});

export default IconMaterialHomeWorkOutlinedFilled;
