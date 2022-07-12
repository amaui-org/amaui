import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCheckIndeterminateSmallTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CheckIndeterminateSmallTwoTone'
      short_name='CheckIndeterminateSmall'

      {...props}
    >
      <path d="M8 13.5q-.6 0-1.05-.45Q6.5 12.6 6.5 12q0-.625.45-1.075.45-.45 1.05-.45h8q.625 0 1.075.45.45.45.45 1.075 0 .6-.45 1.05-.45.45-1.075.45Z"/>
    </Icon>
  )
});

export default IconMaterialCheckIndeterminateSmallTwoTone;
