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
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M5 10.41l7 7 9-9L19.59 7 12 14.59 6.41 9H11V7H3v8h2z"/>
    </Icon>
  );
});

IconMaterialCallMissed.displayName = 'AmauiIconMaterialCallMissed';

export default IconMaterialCallMissed;
