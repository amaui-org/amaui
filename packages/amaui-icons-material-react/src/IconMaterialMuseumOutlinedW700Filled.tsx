import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMuseumOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MuseumOutlinedW700Filled'
      short_name='Museum'

      {...props}
    >
      <path d="M1.15 22.85V19.15H3.15V11.85H1.15V8.575L12 0.975L22.85 8.575V11.85H20.85V19.15H22.85V22.85ZM8 18H10V14L12 17L14 14V18H16V11H14L12 14L10 11H8Z"/>
    </Icon>
  )
});

export default IconMaterialMuseumOutlinedW700Filled;
