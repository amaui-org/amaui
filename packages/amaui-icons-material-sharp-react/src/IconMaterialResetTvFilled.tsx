import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialResetTvFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ResetTvFilled'

      short_name='ResetTv'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 21v-2H2V3h20v7h-9.2l1.85-1.85-1.4-1.4L9 11l4.25 4.25 1.4-1.4L12.8 12H22v7h-6v2Z"/>
    </Icon>
  );
});

IconMaterialResetTvFilled.displayName = 'AmauiIconMaterialResetTvFilled';

export default IconMaterialResetTvFilled;
