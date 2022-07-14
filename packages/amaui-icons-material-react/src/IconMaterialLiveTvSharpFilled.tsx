import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLiveTvSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LiveTvSharpFilled'
      short_name='LiveTv'

      {...props}
    >
      <path d="M9.5 15.5 16.5 11 9.5 6.5ZM8 21V19H2V3H22V19H16V21Z"/>
    </Icon>
  );
});

export default IconMaterialLiveTvSharpFilled;
