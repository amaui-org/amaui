import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPaddingSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PaddingSharpFilled'
      short_name='Padding'

      {...props}
    >
      <path d="M7 9H9V7H7ZM11 9H13V7H11ZM15 9H17V7H15ZM3 21V3H21V21Z"/>
    </Icon>
  );
});

IconMaterialPaddingSharpFilled.displayName = 'AmauiIconMaterialPaddingSharpFilled';

export default IconMaterialPaddingSharpFilled;
