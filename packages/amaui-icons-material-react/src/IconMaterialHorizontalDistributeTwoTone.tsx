import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHorizontalDistributeTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HorizontalDistributeTwoTone'
      short_name='HorizontalDistribute'

      {...props}
    >
      <rect fill="none" height="24" width="24"/><path d="M4,22H2V2h2V22z M22,2h-2v20h2V2z M13.5,7h-3v10h3V7z"/>
    </Icon>
  )
});

export default IconMaterialHorizontalDistributeTwoTone;
