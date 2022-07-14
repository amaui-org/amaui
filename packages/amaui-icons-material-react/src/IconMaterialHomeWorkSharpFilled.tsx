import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHomeWorkSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomeWorkSharpFilled'
      short_name='HomeWork'

      {...props}
    >
      <path d="M17 9H19V7H17ZM17 13H19V11H17ZM17 17H19V15H17ZM17 21V10L10 4.95V3H23V21ZM1 21V11L8 6L15 11V21ZM10 19V14H6V19Z"/>
    </Icon>
  );
});

export default IconMaterialHomeWorkSharpFilled;
