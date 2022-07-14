import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFilter5SharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Filter5SharpFilled'
      short_name='Filter5'

      {...props}
    >
      <path d="M11 15H17V9H13V7H17V5H11V11H15V13H11ZM6 18V2H22V18ZM2 22V6H4V20H18V22Z"/>
    </Icon>
  );
});

export default IconMaterialFilter5SharpFilled;
