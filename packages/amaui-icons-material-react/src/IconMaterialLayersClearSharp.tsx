import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLayersClearSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LayersClearSharp'
      short_name='LayersClear'

      {...props}
    >
      <path d="M16.1 12.8 14.7 11.35 17.75 9 12 4.55 9.65 6.35 8.25 4.9 12 2 21 9ZM18.975 15.65 17.525 14.2 19.35 12.8 21 14.05ZM19.8 22.1 15.8 18.1 12 21.05 3 14.05 4.65 12.8 12 18.5 14.35 16.675 12.925 15.275 12 16 3 9 5.075 7.375 1.375 3.725 2.8 2.3 21.2 20.7ZM12.175 8.85Z"/>
    </Icon>
  )
});

export default IconMaterialLayersClearSharp;
