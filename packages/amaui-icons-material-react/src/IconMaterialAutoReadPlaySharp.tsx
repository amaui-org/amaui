import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAutoReadPlaySharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoReadPlaySharp'
      short_name='AutoReadPlay'

      {...props}
    >
      <path d="M10 14 16 10 10 6ZM2 22V2H22V18H6ZM4 17.175 5.175 16H20V4H4ZM4 17.175V4V16Z"/>
    </Icon>
  )
});

export default IconMaterialAutoReadPlaySharp;
