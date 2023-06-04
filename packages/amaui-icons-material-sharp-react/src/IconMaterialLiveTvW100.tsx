import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLiveTvW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LiveTvW100'

      short_name='LiveTv'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.15 14.3 15.3 11l-5.15-3.3Zm-.85 5.4v-2h-6V4.3h17.4v13.4h-6v2ZM4 17h16V5H4Zm0 0V5v12Z"/>
    </Icon>
  );
});

IconMaterialLiveTvW100.displayName = 'AmauiIconMaterialLiveTvW100';

export default IconMaterialLiveTvW100;
