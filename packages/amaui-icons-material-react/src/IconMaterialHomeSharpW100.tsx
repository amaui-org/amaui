import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHomeSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomeSharpW100'
      short_name='Home'

      {...props}
    >
      <path d="M6 19H9.9V13.15H14.1V19H18V10L12 5.45L6 10ZM5.3 19.7V9.65L12 4.575L18.7 9.65V19.7H13.4V13.85H10.6V19.7ZM12 12.225Z"/>
    </Icon>
  )
});

export default IconMaterialHomeSharpW100;
