import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHttpSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HttpSharp'
      short_name='Http'

      {...props}
    >
      <path d="M1 15V9H2.5V11H4.5V9H6V15H4.5V12.5H2.5V15ZM8.5 15V10.5H7V9H11.5V10.5H10V15ZM14 15V10.5H12.5V9H17V10.5H15.5V15ZM18 15V9H23V13H19.5V15ZM19.5 11.5H21.5V10.5H19.5Z"/>
    </Icon>
  );
});

IconMaterialHttpSharp.displayName = 'AmauiIconMaterialHttpSharp';

export default IconMaterialHttpSharp;
