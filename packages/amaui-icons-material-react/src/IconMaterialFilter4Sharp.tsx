import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFilter4Sharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Filter4Sharp'
      short_name='Filter4'

      {...props}
    >
      <path d="M6 18V2H22V18ZM8 16H20V4H8ZM2 22V6H4V20H18V22ZM8 16V4V16ZM15 15H17V5H15V9H13V5H11V11H15Z"/>
    </Icon>
  );
});

export default IconMaterialFilter4Sharp;
