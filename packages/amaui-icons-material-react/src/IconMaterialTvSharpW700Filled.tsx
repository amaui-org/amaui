import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTvSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TvSharpW700Filled'
      short_name='Tv'

      {...props}
    >
      <path d="M7.55 22.225V19.85H1.15V2.15H22.85V19.85H16.45V22.225Z"/>
    </Icon>
  )
});

export default IconMaterialTvSharpW700Filled;
