import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialResetTvSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ResetTvSharp'
      short_name='ResetTv'

      {...props}
    >
      <path d="M8 21V19H2V3H22V8H20V5H4V17H20V12H12.8L14.65 13.85L13.25 15.25L9 11L13.25 6.75L14.65 8.15L12.8 10H22V19H16V21ZM13 11Z"/>
    </Icon>
  );
});

export default IconMaterialResetTvSharp;
