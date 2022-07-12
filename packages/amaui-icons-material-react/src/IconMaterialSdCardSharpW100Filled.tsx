import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSdCardSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SdCardSharpW100Filled'
      short_name='SdCard'

      {...props}
    >
      <path d="M9.75 10.7H10.45V7.45H9.75ZM12.5 10.7H13.2V7.45H12.5ZM15.25 10.7H15.95V7.45H15.25ZM5.3 20.7V8.55L10.55 3.3H18.7V20.7Z"/>
    </Icon>
  )
});

export default IconMaterialSdCardSharpW100Filled;
