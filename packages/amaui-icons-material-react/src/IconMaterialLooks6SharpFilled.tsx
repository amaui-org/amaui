import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLooks6SharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Looks6SharpFilled'
      short_name='Looks6'

      {...props}
    >
      <path d="M11 11V9H14V7H9V17H15V11ZM11 13H13V15H11ZM3 21V3H21V21Z"/>
    </Icon>
  );
});

export default IconMaterialLooks6SharpFilled;
