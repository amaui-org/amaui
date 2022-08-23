import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVideoStableSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoStableSharpW100'
      short_name='VideoStable'

      {...props}
    >
      <path d="M15.7 16.45 17.4 10 8.35 7.55 6.65 13.95ZM15.2 15.575 7.5 13.45 8.85 8.4 16.55 10.5ZM3.3 18.7V5.3H20.7V18.7ZM4 18H20V6H4ZM4 18V6V18Z"/>
    </Icon>
  );
});

IconMaterialVideoStableSharpW100.displayName = 'AmauiIconMaterialVideoStableSharpW100';

export default IconMaterialVideoStableSharpW100;
