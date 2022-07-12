import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHumidityHighTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HumidityHighTwoTone'
      short_name='HumidityHigh'

      {...props}
    >
      <path d="M12 22.125q-3.55 0-6.087-2.475-2.538-2.475-2.538-6.025 0-1.8.675-3.35T5.925 7.55L12 1.575l6.075 5.975q1.225 1.175 1.887 2.737.663 1.563.663 3.338 0 3.525-2.538 6.012Q15.55 22.125 12 22.125Z"/>
    </Icon>
  )
});

export default IconMaterialHumidityHighTwoTone;
