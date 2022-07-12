import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLoginSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LoginSharp'
      short_name='Login'

      {...props}
    >
      <path d="M10 17 8.625 15.55 11.175 13H3V11H11.175L8.625 8.45L10 7L15 12ZM12 21V19H19V5H12V3H21V21Z"/>
    </Icon>
  )
});

export default IconMaterialLoginSharp;
