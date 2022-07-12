import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDescriptionSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DescriptionSharpW100'
      short_name='Description'

      {...props}
    >
      <path d="M8.65 17.35H15.35V16.65H8.65ZM8.65 13.35H15.35V12.65H8.65ZM5.3 20.7V3.3H14.65L18.7 7.35V20.7ZM14.3 7.7V4H6V20H18V7.7ZM6 4V7.7V4V7.7V20Z"/>
    </Icon>
  )
});

export default IconMaterialDescriptionSharpW100;
