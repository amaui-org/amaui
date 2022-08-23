import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialExplicitSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExplicitSharpFilled'
      short_name='Explicit'

      {...props}
    >
      <path d="M9 17H15V15H11V13H15V11H11V9H15V7H9ZM3 21V3H21V21Z"/>
    </Icon>
  );
});

IconMaterialExplicitSharpFilled.displayName = 'AmauiIconMaterialExplicitSharpFilled';

export default IconMaterialExplicitSharpFilled;
