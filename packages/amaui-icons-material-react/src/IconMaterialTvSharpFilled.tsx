import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTvSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TvSharpFilled'
      short_name='Tv'

      {...props}
    >
      <path d="M8 21V19H2V3H22V19H16V21Z"/>
    </Icon>
  );
});

export default IconMaterialTvSharpFilled;
