import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCheckIndeterminateSmallSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CheckIndeterminateSmallSharpFilled'
      short_name='CheckIndeterminateSmall'

      {...props}
    >
      <path d="M7 13v-2h10v2Z"/>
    </Icon>
  );
});

IconMaterialCheckIndeterminateSmallSharpFilled.displayName = 'AmauiIconMaterialCheckIndeterminateSmallSharpFilled';

export default IconMaterialCheckIndeterminateSmallSharpFilled;
