import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialViewCarouselTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewCarouselTwoTone'
      short_name='ViewCarousel'

      {...props}
    >
      <rect fill="none" height="24" width="24"/><rect height="10" opacity=".3" width="6" x="9" y="7"/><path d="M2,7h4v10H2V7z M7,19h10V5H7V19z M9,7h6v10H9V7z M18,7h4v10h-4V7z"/>
    </Icon>
  )
});

export default IconMaterialViewCarouselTwoTone;
