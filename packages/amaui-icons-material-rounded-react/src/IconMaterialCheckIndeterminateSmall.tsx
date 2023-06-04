import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCheckIndeterminateSmall = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CheckIndeterminateSmall'

      short_name='CheckIndeterminateSmall'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 13q-.425 0-.713-.288Q7 12.425 7 12t.287-.713Q7.575 11 8 11h8q.425 0 .712.287.288.288.288.713t-.288.712Q16.425 13 16 13Z"/>
    </Icon>
  );
});

IconMaterialCheckIndeterminateSmall.displayName = 'AmauiIconMaterialCheckIndeterminateSmall';

export default IconMaterialCheckIndeterminateSmall;
