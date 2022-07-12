import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLiveTvSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LiveTvSharpW700Filled'
      short_name='LiveTv'

      {...props}
    >
      <path d="M9.125 15.85 16.65 11 9.125 6.15ZM7.55 22.225V19.85H1.15V2.15H22.85V19.85H16.45V22.225Z"/>
    </Icon>
  )
});

export default IconMaterialLiveTvSharpW700Filled;
