import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialUnfoldMoreSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='UnfoldMoreSharpW100Filled'
      short_name='UnfoldMore'

      {...props}
    >
      <path d="M8.85 8.1 8.35 7.6 12 3.95 15.65 7.6 15.15 8.1 12 4.95ZM12 20.05 8.35 16.4 8.85 15.9 12 19.05 15.15 15.9 15.65 16.4Z"/>
    </Icon>
  )
});

export default IconMaterialUnfoldMoreSharpW100Filled;
