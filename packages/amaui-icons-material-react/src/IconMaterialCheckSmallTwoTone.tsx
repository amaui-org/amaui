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
      <path d="m10 13.6 5.9-5.9q.275-.275.7-.275.425 0 .7.275.275.275.275.7 0 .425-.275.7l-6.6 6.6q-.3.3-.7.3-.4 0-.7-.3l-2.6-2.6q-.275-.275-.275-.7 0-.425.275-.7.275-.275.7-.275.425 0 .7.275Z"/>
    </Icon>
  )
});

export default IconMaterialCheckSmallTwoTone;
