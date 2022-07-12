import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMuseumOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MuseumOutlinedW700'
      short_name='Museum'

      {...props}
    >
      <path d="M1.15 22.85V19.15H3.15V11.85H1.15V8.575L12 0.975L22.85 8.575V11.85H20.85V19.15H22.85V22.85ZM6.3 19.7H12H17.7ZM8 18H10V14L12 17L14 14V18H16V11H14L12 14L10 11H8ZM17.7 19.7V8.8L12 4.825L6.3 8.8V19.7Z"/>
    </Icon>
  )
});

export default IconMaterialMuseumOutlinedW700;
