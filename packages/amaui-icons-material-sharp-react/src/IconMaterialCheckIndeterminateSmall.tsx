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
      <path d="M7 13v-2h10v2Z"/>
    </Icon>
  );
});

IconMaterialCheckIndeterminateSmall.displayName = 'AmauiIconMaterialCheckIndeterminateSmall';

export default IconMaterialCheckIndeterminateSmall;
