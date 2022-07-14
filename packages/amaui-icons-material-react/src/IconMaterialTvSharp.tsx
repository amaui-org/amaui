import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTvSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TvSharp'
      short_name='Tv'

      {...props}
    >
      <path d="M8 21V19H2V3H22V19H16V21ZM4 17H20V5H4ZM4 17V5V17Z"/>
    </Icon>
  );
});

export default IconMaterialTvSharp;
