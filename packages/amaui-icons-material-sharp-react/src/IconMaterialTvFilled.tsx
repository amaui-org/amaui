import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTvFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TvFilled'

      short_name='Tv'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 21v-2H2V3h20v16h-6v2Z"/>
    </Icon>
  );
});

IconMaterialTvFilled.displayName = 'AmauiIconMaterialTvFilled';

export default IconMaterialTvFilled;
