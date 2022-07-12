import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLiveTvSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LiveTvSharpW700'
      short_name='LiveTv'

      {...props}
    >
      <path d="M9.125 15.85 16.65 11 9.125 6.15ZM7.55 22.225V19.85H1.15V2.15H22.85V19.85H16.45V22.225ZM4.3 16.7H19.7V5.3H4.3ZM4.3 16.7V5.3V16.7Z"/>
    </Icon>
  )
});

export default IconMaterialLiveTvSharpW700;
