import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDescriptionSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DescriptionSharp'
      short_name='Description'

      {...props}
    >
      <path d="M8 18H16V16H8ZM8 14H16V12H8ZM4 22V2H14L20 8V22ZM13 9V4H6V20H18V9ZM6 4V9V4V9V20Z"/>
    </Icon>
  );
});

export default IconMaterialDescriptionSharp;
