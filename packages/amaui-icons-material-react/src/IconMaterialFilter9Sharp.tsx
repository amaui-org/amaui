import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFilter9Sharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Filter9Sharp'
      short_name='Filter9'

      {...props}
    >
      <path d="M12 15H17V5H11V11H15V13H12ZM15 9H13V7H15ZM6 18V2H22V18ZM8 16H20V4H8ZM2 22V6H4V20H18V22ZM8 16V4V16Z"/>
    </Icon>
  )
});

export default IconMaterialFilter9Sharp;
