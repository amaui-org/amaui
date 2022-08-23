import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSosSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SosSharpW100'
      short_name='Sos'

      {...props}
    >
      <path d="M9.4 15.85V8.15H14.6V15.85ZM2.65 15.85V15.15H6.15V12.35H2.65V8.15H6.85V8.85H3.35V11.65H6.85V15.85ZM17.15 15.85V15.15H20.65V12.35H17.15V8.15H21.35V8.85H17.85V11.65H21.35V15.85ZM10.1 15.15H13.9V8.85H10.1Z"/>
    </Icon>
  );
});

IconMaterialSosSharpW100.displayName = 'AmauiIconMaterialSosSharpW100';

export default IconMaterialSosSharpW100;
