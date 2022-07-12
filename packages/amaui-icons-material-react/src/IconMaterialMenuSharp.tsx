import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMenuSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MenuSharp'
      short_name='Menu'

      {...props}
    >
      <path d="M3 18V16H21V18ZM3 13V11H21V13ZM3 8V6H21V8Z"/>
    </Icon>
  )
});

export default IconMaterialMenuSharp;
