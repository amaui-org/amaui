import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDescriptionSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DescriptionSharpW100Filled'
      short_name='Description'

      {...props}
    >
      <path d="M8.65 17.35H15.35V16.65H8.65ZM8.65 13.35H15.35V12.65H8.65ZM5.3 20.7V3.3H14.65L18.7 7.35V20.7ZM14.3 7.7H18L14.3 4Z"/>
    </Icon>
  )
});

export default IconMaterialDescriptionSharpW100Filled;
