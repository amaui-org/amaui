import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRequestPageSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RequestPageSharpW100'
      short_name='RequestPage'

      {...props}
    >
      <path d="M11.65 17.35H12.35V16.35H14.35V12.65H10.35V10.35H14.35V9.65H12.35V8.65H11.65V9.65H9.65V13.35H13.65V15.65H9.65V16.35H11.65ZM5.3 20.7V3.3H13.45L18.7 8.55V20.7ZM6 20H18V8.85L13.15 4H6ZM6 4V8.85V20Z"/>
    </Icon>
  );
});

IconMaterialRequestPageSharpW100.displayName = 'AmauiIconMaterialRequestPageSharpW100';

export default IconMaterialRequestPageSharpW100;
