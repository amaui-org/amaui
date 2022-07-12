import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCheckIndeterminateSmallRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CheckIndeterminateSmallRoundedFilled'
      short_name='CheckIndeterminateSmall'

      {...props}
    >
      <path d="M8 13q-.425 0-.713-.288Q7 12.425 7 12t.287-.713Q7.575 11 8 11h8q.425 0 .712.287.288.288.288.713t-.288.712Q16.425 13 16 13Z"/>
    </Icon>
  )
});

export default IconMaterialCheckIndeterminateSmallRoundedFilled;
