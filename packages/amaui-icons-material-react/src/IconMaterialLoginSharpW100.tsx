import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLoginSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LoginSharpW100'
      short_name='Login'

      {...props}
    >
      <path d="M11.6 15.75 11.1 15.25 13.35 13H4.55V12.3H13.35L11.1 10.05L11.6 9.55L14.7 12.65ZM11.7 21V20.3H18.75V5H11.7V4.3H19.45V21Z"/>
    </Icon>
  );
});

IconMaterialLoginSharpW100.displayName = 'AmauiIconMaterialLoginSharpW100';

export default IconMaterialLoginSharpW100;
