import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTv = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Tv'

      short_name='Tv'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 21v-2H2V3h20v16h-6v2Zm-4-4h16V5H4Zm0 0V5v12Z"/>
    </Icon>
  );
});

IconMaterialTv.displayName = 'AmauiIconMaterialTv';

export default IconMaterialTv;
