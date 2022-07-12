import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialViewCarouselOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewCarouselOutlinedFilled'
      short_name='ViewCarousel'

      {...props}
    >
      <path d="M2 7H6V17H2ZM7 5H17V19H7ZM18 7H22V17H18Z"/>
    </Icon>
  )
});

export default IconMaterialViewCarouselOutlinedFilled;
