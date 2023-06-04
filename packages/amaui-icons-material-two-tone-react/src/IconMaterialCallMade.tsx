import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCallMade = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CallMade'

      short_name='CallMade'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M5.41 20L17 8.41V15h2V5H9v2h6.59L4 18.59z"/>
    </Icon>
  );
});

IconMaterialCallMade.displayName = 'AmauiIconMaterialCallMade';

export default IconMaterialCallMade;
