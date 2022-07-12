import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHorizontalSplitSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HorizontalSplitSharp'
      short_name='HorizontalSplit'

      {...props}
    >
      <path d="M3 7V5H21V7ZM3 11V9H21V11ZM3 19V13H21V19Z"/>
    </Icon>
  )
});

export default IconMaterialHorizontalSplitSharp;
