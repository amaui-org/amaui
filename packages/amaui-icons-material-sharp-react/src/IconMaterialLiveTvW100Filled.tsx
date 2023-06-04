import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLiveTvW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LiveTvW100Filled'

      short_name='LiveTv'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.15 14.3 15.3 11l-5.15-3.3Zm-.85 5.4v-2h-6V4.3h17.4v13.4h-6v2Z"/>
    </Icon>
  );
});

IconMaterialLiveTvW100Filled.displayName = 'AmauiIconMaterialLiveTvW100Filled';

export default IconMaterialLiveTvW100Filled;
