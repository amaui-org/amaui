import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialExplicitSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExplicitSharpW100'
      short_name='Explicit'

      {...props}
    >
      <path d="M9.65 16.35H14.35V15.65H10.35V12.35H14.35V11.65H10.35V8.35H14.35V7.65H9.65ZM4.3 19.7V4.3H19.7V19.7ZM5 19H19V5H5ZM5 19V5V19Z"/>
    </Icon>
  );
});

IconMaterialExplicitSharpW100.displayName = 'AmauiIconMaterialExplicitSharpW100';

export default IconMaterialExplicitSharpW100;
