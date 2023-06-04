import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWristW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WristW100Filled'

      short_name='Wrist'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M450 910 264 724H76V428h168l80-80h440v28H576v95h268v28H576v94h308v28H576v95h228v28H453l53 105-56 61Z"/>
    </Icon>
  );
});

IconMaterialWristW100Filled.displayName = 'AmauiIconMaterialWristW100Filled';

export default IconMaterialWristW100Filled;
