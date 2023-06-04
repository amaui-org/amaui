import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTvW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TvW100Filled'

      short_name='Tv'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.3 19.7v-2h-6V4.3h17.4v13.4h-6v2Z"/>
    </Icon>
  );
});

IconMaterialTvW100Filled.displayName = 'AmauiIconMaterialTvW100Filled';

export default IconMaterialTvW100Filled;
