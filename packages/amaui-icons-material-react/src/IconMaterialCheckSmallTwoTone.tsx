import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCheckSmallTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CheckSmallTwoTone'
      short_name='CheckSmall'

      {...props}
    >
      <path d="m10 12.85 5.55-5.525Q16 6.9 16.6 6.9q.6 0 1.05.45.45.45.45 1.05 0 .6-.45 1.05l-6.55 6.6q-.475.45-1.1.45-.625 0-1.075-.45l-2.575-2.6Q5.9 13 5.9 12.4q0-.6.45-1.05.45-.45 1.05-.45.6 0 1.05.45Z"/>
    </Icon>
  )
});

export default IconMaterialCheckSmallTwoTone;
