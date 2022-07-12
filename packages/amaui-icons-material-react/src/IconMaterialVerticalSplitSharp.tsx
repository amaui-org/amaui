import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVerticalSplitSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VerticalSplitSharp'
      short_name='VerticalSplit'

      {...props}
    >
      <path d="M3 13V15H11V13ZM3 17V19H11V17ZM3 9V11H11V9ZM3 5V7H11V5ZM15 7V17ZM13 5H21V19H13ZM15 7V17H19V7Z"/>
    </Icon>
  )
});

export default IconMaterialVerticalSplitSharp;
