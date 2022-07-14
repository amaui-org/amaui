import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFirstPageSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FirstPageSharpW100Filled'
      short_name='FirstPage'

      {...props}
    >
      <path d="M17 17.1 11.9 12 17 6.9 17.5 7.4 12.9 12 17.5 16.6ZM6.65 17.35V6.65H7.35V17.35Z"/>
    </Icon>
  );
});

export default IconMaterialFirstPageSharpW100Filled;
