import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCheckW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CheckW100'

      short_name='Check'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.55 17.1 4.8 12.35l.5-.5 4.25 4.25 9.15-9.15.5.5Z"/>
    </Icon>
  );
});

IconMaterialCheckW100.displayName = 'AmauiIconMaterialCheckW100';

export default IconMaterialCheckW100;
