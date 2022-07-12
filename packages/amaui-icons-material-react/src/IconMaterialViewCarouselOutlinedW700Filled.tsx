import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialViewCarouselOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewCarouselOutlinedW700Filled'
      short_name='ViewCarousel'

      {...props}
    >
      <path d="M0.85 6.625H5.8V17.375H0.85ZM6.8 4.225H17.2V19.775H6.8ZM18.2 6.625H23.15V17.375H18.2Z"/>
    </Icon>
  )
});

export default IconMaterialViewCarouselOutlinedW700Filled;
