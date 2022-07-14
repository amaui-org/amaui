import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFilter3Sharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Filter3Sharp'
      short_name='Filter3'

      {...props}
    >
      <path d="M11 15H17V5H11V7H15V9H13V11H15V13H11ZM6 18V2H22V18ZM8 16H20V4H8ZM2 22V6H4V20H18V22ZM8 16V4V16Z"/>
    </Icon>
  );
});

export default IconMaterialFilter3Sharp;
