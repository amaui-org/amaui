import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialViewListSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewListSharpFilled'
      short_name='ViewList'

      {...props}
    >
      <path d="M3 9V5H7V9ZM8 9V5H21V9ZM8 14V10H21V14ZM8 19V15H21V19ZM3 19V15H7V19ZM3 14V10H7V14Z"/>
    </Icon>
  )
});

export default IconMaterialViewListSharpFilled;
