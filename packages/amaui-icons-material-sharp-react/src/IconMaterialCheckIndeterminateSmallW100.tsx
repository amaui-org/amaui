import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCheckIndeterminateSmallW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CheckIndeterminateSmallW100'

      short_name='CheckIndeterminateSmall'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.65 12.35v-.7h8.7v.7Z"/>
    </Icon>
  );
});

IconMaterialCheckIndeterminateSmallW100.displayName = 'AmauiIconMaterialCheckIndeterminateSmallW100';

export default IconMaterialCheckIndeterminateSmallW100;
