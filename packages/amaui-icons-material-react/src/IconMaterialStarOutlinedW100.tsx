import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialStarOutlinedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='StarOutlinedW100'
      short_name='Star'

      {...props}
    >
      <path d="M8.25 18.55 9.65 13.9 6.05 11.3H10.55L12 6.5L13.45 11.3H17.95L14.35 13.9L15.75 18.55L12 15.7Z"/>
    </Icon>
  )
});

export default IconMaterialStarOutlinedW100;
