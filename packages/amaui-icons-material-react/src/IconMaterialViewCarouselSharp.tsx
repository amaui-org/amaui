import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialViewCarouselSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewCarouselSharp'
      short_name='ViewCarousel'

      {...props}
    >
      <path d="M2 7H6V17H2ZM7 5H17V19H7ZM9 7V17ZM18 7H22V17H18ZM9 7V17H15V7Z"/>
    </Icon>
  )
});

export default IconMaterialViewCarouselSharp;
