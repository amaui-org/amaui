import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCheckW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CheckW100Filled'

      short_name='Check'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.55 17.1 4.8 12.35l.5-.5 4.25 4.25 9.15-9.15.5.5Z"/>
    </Icon>
  );
});

IconMaterialCheckW100Filled.displayName = 'AmauiIconMaterialCheckW100Filled';

export default IconMaterialCheckW100Filled;
