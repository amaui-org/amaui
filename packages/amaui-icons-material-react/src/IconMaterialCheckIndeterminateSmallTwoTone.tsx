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
      <path d="M6.5 13.5v-3.025h11.025V13.5Z"/>
    </Icon>
  )
});

export default IconMaterialCheckIndeterminateSmallTwoTone;
