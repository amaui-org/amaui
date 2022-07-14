import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSimCardSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SimCardSharpFilled'
      short_name='SimCard'

      {...props}
    >
      <path d="M7 19H9V17H7ZM15 19H17V17H15ZM7 15H9V11H7ZM11 19H13V15H11ZM11 13H13V11H11ZM15 15H17V11H15ZM4 22V8L10 2H20V22Z"/>
    </Icon>
  );
});

export default IconMaterialSimCardSharpFilled;
