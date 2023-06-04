import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialViewCarouselW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewCarouselW100Filled'

      short_name='ViewCarousel'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.7 8.3H6v7.4H3.7Zm4.6-2h7.4v11.4H8.3Zm9.7 2h2.3v7.4H18Z"/>
    </Icon>
  );
});

IconMaterialViewCarouselW100Filled.displayName = 'AmauiIconMaterialViewCarouselW100Filled';

export default IconMaterialViewCarouselW100Filled;
