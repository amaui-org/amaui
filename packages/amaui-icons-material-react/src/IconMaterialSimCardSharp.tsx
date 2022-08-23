import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSimCardSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SimCardSharp'
      short_name='SimCard'

      {...props}
    >
      <path d="M7 19H9V17H7ZM15 19H17V17H15ZM7 15H9V11H7ZM11 19H13V15H11ZM11 13H13V11H11ZM15 15H17V11H15ZM4 22V8L10 2H20V22ZM6 20H18V4H10.85L6 8.85ZM6 20H10.85H18Z"/>
    </Icon>
  );
});

IconMaterialSimCardSharp.displayName = 'AmauiIconMaterialSimCardSharp';

export default IconMaterialSimCardSharp;
