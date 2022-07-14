import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFirstPageSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FirstPageSharp'
      short_name='FirstPage'

      {...props}
    >
      <path d="M17 18 11 12 17 6 18.4 7.4 13.8 12 18.4 16.6ZM6 18V6H8V18Z"/>
    </Icon>
  );
});

export default IconMaterialFirstPageSharp;
