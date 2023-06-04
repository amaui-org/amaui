import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCheckIndeterminateSmallFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CheckIndeterminateSmallFilled'

      short_name='CheckIndeterminateSmall'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 13v-2h10v2Z"/>
    </Icon>
  );
});

IconMaterialCheckIndeterminateSmallFilled.displayName = 'AmauiIconMaterialCheckIndeterminateSmallFilled';

export default IconMaterialCheckIndeterminateSmallFilled;
