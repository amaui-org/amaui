import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSimCardSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SimCardSharpW100'
      short_name='SimCard'

      {...props}
    >
      <path d="M7.65 18.5H8.35V17.25H7.65ZM15.65 18.5H16.35V17.25H15.65ZM7.65 14.75H8.35V11.5H7.65ZM11.65 18.5H12.35V15.25H11.65ZM11.65 12.75H12.35V11.5H11.65ZM15.65 14.75H16.35V11.5H15.65ZM5.3 20.7V8.55L10.55 3.3H18.7V20.7ZM6 20H18V4H10.85L6 8.85ZM6 20H10.85H18Z"/>
    </Icon>
  );
});

IconMaterialSimCardSharpW100.displayName = 'AmauiIconMaterialSimCardSharpW100';

export default IconMaterialSimCardSharpW100;
