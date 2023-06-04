import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTvOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TvOffW100Filled'

      short_name='TvOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M20.7 16.875 8.125 4.3H20.7ZM3.3 17.7V4.3h2v1L2.6 2.6l.5-.5 18.35 18.35-.5.5-3.25-3.25h-2.95v2H9.3v-2Z"/>
    </Icon>
  );
});

IconMaterialTvOffW100Filled.displayName = 'AmauiIconMaterialTvOffW100Filled';

export default IconMaterialTvOffW100Filled;
