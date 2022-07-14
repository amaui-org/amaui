import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialResetTvSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ResetTvSharpFilled'
      short_name='ResetTv'

      {...props}
    >
      <path d="M8 21V19H2V3H22V10H12.8L14.65 8.15L13.25 6.75L9 11L13.25 15.25L14.65 13.85L12.8 12H22V19H16V21Z"/>
    </Icon>
  );
});

export default IconMaterialResetTvSharpFilled;
