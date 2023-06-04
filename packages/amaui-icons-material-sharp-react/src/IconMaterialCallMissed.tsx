import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCallMissed = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CallMissed'

      short_name='CallMissed'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m12 17.425-7-7V15H3V7h8v2H6.4l5.6 5.6L19.6 7 21 8.425Z"/>
    </Icon>
  );
});

IconMaterialCallMissed.displayName = 'AmauiIconMaterialCallMissed';

export default IconMaterialCallMissed;
