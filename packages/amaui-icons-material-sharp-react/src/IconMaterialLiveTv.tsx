import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLiveTv = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LiveTv'

      short_name='LiveTv'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m9.5 15.5 7-4.5-7-4.5ZM8 21v-2H2V3h20v16h-6v2Zm-4-4h16V5H4Zm0 0V5v12Z"/>
    </Icon>
  );
});

IconMaterialLiveTv.displayName = 'AmauiIconMaterialLiveTv';

export default IconMaterialLiveTv;
