import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialStayPrimaryPortraitTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='StayPrimaryPortraitTwoTone'
      short_name='StayPrimaryPortrait'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M7 5h10v14H7z" opacity=".3"/><path d="M17 1.01L7 1c-1.1 0-1.99.9-1.99 2v18c0 1.1.89 2 1.99 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/>
    </Icon>
  )
});

export default IconMaterialStayPrimaryPortraitTwoTone;
