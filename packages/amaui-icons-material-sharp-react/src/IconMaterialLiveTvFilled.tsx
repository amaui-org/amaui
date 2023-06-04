import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLiveTvFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LiveTvFilled'

      short_name='LiveTv'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m9.5 15.5 7-4.5-7-4.5ZM8 21v-2H2V3h20v16h-6v2Z"/>
    </Icon>
  );
});

IconMaterialLiveTvFilled.displayName = 'AmauiIconMaterialLiveTvFilled';

export default IconMaterialLiveTvFilled;
