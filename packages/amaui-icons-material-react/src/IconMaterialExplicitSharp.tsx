import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialExplicitSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExplicitSharp'
      short_name='Explicit'

      {...props}
    >
      <path d="M9 17H15V15H11V13H15V11H11V9H15V7H9ZM3 21V3H21V21ZM5 19H19V5H5ZM5 19V5V19Z"/>
    </Icon>
  );
});

IconMaterialExplicitSharp.displayName = 'AmauiIconMaterialExplicitSharp';

export default IconMaterialExplicitSharp;
