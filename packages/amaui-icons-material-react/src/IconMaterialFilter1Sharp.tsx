import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFilter1Sharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Filter1Sharp'
      short_name='Filter1'

      {...props}
    >
      <path d="M14 15H16V5H12V7H14ZM6 18V2H22V18ZM8 16H20V4H8ZM2 22V6H4V20H18V22ZM8 16V4V16Z"/>
    </Icon>
  );
});

export default IconMaterialFilter1Sharp;
