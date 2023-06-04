import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTvOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TvOffW100'

      short_name='TvOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M20 16.2V5H8.825l-.7-.7H20.7v12.575ZM3.3 17.7V4.3h2L6 5H4v12h13L2.6 2.6l.5-.5 18.35 18.35-.5.5-3.3-3.25H14.7v2H9.3v-2Zm7.9-6.475Zm3.625-.25Z"/>
    </Icon>
  );
});

IconMaterialTvOffW100.displayName = 'AmauiIconMaterialTvOffW100';

export default IconMaterialTvOffW100;
