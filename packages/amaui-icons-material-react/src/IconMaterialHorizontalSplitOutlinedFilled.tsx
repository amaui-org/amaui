import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHorizontalSplitOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HorizontalSplitOutlinedFilled'
      short_name='HorizontalSplit'

      {...props}
    >
      <path d="M3 7V5H21V7ZM3 11V9H21V11ZM3 19V13H21V19ZM5 17H19V15H5ZM5 17V15H19V17Z"/>
    </Icon>
  )
});

export default IconMaterialHorizontalSplitOutlinedFilled;
