import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSdCardSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SdCardSharpW100'
      short_name='SdCard'

      {...props}
    >
      <path d="M9.75 10.7H10.45V7.45H9.75ZM12.5 10.7H13.2V7.45H12.5ZM15.25 10.7H15.95V7.45H15.25ZM5.3 20.7V8.55L10.55 3.3H18.7V20.7ZM6 20H18V4H10.85L6 8.85ZM6 20H10.85H18Z"/>
    </Icon>
  );
});

export default IconMaterialSdCardSharpW100;
