import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDehaze = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Dehaze'

      short_name='Dehaze'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M2 16v2h20v-2H2zm0-5v2h20v-2H2zm0-5v2h20V6H2z"/>
    </Icon>
  );
});

IconMaterialDehaze.displayName = 'AmauiIconMaterialDehaze';

export default IconMaterialDehaze;
