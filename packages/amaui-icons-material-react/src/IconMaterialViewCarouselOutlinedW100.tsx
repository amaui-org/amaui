import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialViewCarouselOutlinedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewCarouselOutlinedW100'
      short_name='ViewCarousel'

      {...props}
    >
      <path d="M3.7 8.3H6V15.7H3.7ZM8.3 6.3H15.7V17.7H8.3ZM9 7V17ZM18 8.3H20.3V15.7H18ZM9 7V17H15V7Z"/>
    </Icon>
  )
});

export default IconMaterialViewCarouselOutlinedW100;
