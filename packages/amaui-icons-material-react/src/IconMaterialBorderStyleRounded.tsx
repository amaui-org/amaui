import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBorderStyleRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BorderStyleRounded'
      short_name='BorderStyle'

      {...props}
    >
      <path d="M15 21V19H17V21ZM19 21V19H21V21ZM7 21V19H9V21ZM11 21V19H13V21ZM19 17V15H21V17ZM19 13V11H21V13ZM3 21V5Q3 4.175 3.587 3.587Q4.175 3 5 3H21V5H5Q5 5 5 5Q5 5 5 5V21ZM19 9V7H21V9Z"/>
    </Icon>
  )
});

export default IconMaterialBorderStyleRounded;
