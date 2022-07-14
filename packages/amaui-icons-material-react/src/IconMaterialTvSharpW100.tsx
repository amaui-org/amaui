import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTvSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TvSharpW100'
      short_name='Tv'

      {...props}
    >
      <path d="M9.3 19.7V17.7H3.3V4.3H20.7V17.7H14.7V19.7ZM4 17H20V5H4ZM4 17V5V17Z"/>
    </Icon>
  );
});

export default IconMaterialTvSharpW100;
