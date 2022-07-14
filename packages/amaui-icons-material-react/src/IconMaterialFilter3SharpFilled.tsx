import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFilter3SharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Filter3SharpFilled'
      short_name='Filter3'

      {...props}
    >
      <path d="M11 15H17V5H11V7H15V9H13V11H15V13H11ZM6 18V2H22V18ZM2 22V6H4V20H18V22Z"/>
    </Icon>
  );
});

export default IconMaterialFilter3SharpFilled;
