import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHorizontalSplitSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HorizontalSplitSharpW100'
      short_name='HorizontalSplit'

      {...props}
    >
      <path d="M4.3 7V6.3H19.7V7ZM4.3 9.7V9H19.7V9.7ZM4.3 17.7V11.7H19.7V17.7Z"/>
    </Icon>
  );
});

export default IconMaterialHorizontalSplitSharpW100;
