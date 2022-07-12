import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFilter9SharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Filter9SharpFilled'
      short_name='Filter9'

      {...props}
    >
      <path d="M12 15H17V5H11V11H15V13H12ZM15 9H13V7H15ZM6 18V2H22V18ZM2 22V6H4V20H18V22Z"/>
    </Icon>
  )
});

export default IconMaterialFilter9SharpFilled;
