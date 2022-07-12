import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialViewCarouselSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewCarouselSharpW700'
      short_name='ViewCarousel'

      {...props}
    >
      <path d="M0.85 6.625H5.8V17.375H0.85ZM6.8 4.225H17.2V19.775H6.8ZM9.95 7.375V16.625ZM18.2 6.625H23.15V17.375H18.2ZM9.95 7.375V16.625H14.05V7.375Z"/>
    </Icon>
  )
});

export default IconMaterialViewCarouselSharpW700;
