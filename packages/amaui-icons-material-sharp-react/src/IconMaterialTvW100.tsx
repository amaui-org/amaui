import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTvW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TvW100'

      short_name='Tv'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.3 19.7v-2h-6V4.3h17.4v13.4h-6v2ZM4 17h16V5H4Zm0 0V5v12Z"/>
    </Icon>
  );
});

IconMaterialTvW100.displayName = 'AmauiIconMaterialTvW100';

export default IconMaterialTvW100;
