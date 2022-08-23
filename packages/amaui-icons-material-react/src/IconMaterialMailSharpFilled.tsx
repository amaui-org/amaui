import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMailSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MailSharpFilled'
      short_name='Mail'

      {...props}
    >
      <path d="M2 20V4H22V20ZM12 13 20 8V6L12 11L4 6V8Z"/>
    </Icon>
  );
});

IconMaterialMailSharpFilled.displayName = 'AmauiIconMaterialMailSharpFilled';

export default IconMaterialMailSharpFilled;
