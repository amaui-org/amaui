import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAirlineSeatLegroomNormalW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirlineSeatLegroomNormalW100Filled'

      short_name='AirlineSeatLegroomNormal'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16.625 20.25q-.275 0-.487-.212-.213-.213-.213-.488v-4.9h-8q-.575 0-.962-.388-.388-.387-.388-.962V3.65h4.7v7.3h4.8q.575 0 .963.387.387.388.387.963v6.65h1.9q.375 0 .588.187.212.188.212.463t-.212.462q-.213.188-.588.188Zm-10.25-3.9q-.65 0-1.075-.425-.425-.425-.425-1.075V4q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v10.85q0 .3.25.55.25.25.55.25h7.1q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialAirlineSeatLegroomNormalW100Filled.displayName = 'AmauiIconMaterialAirlineSeatLegroomNormalW100Filled';

export default IconMaterialAirlineSeatLegroomNormalW100Filled;
