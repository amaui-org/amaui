import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialViewCarouselW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewCarouselW100'

      short_name='ViewCarousel'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.7 8.3H6v7.4H3.7Zm4.6-2h7.4v11.4H8.3ZM9 7v10Zm9 1.3h2.3v7.4H18ZM9 7v10h6V7Z"/>
    </Icon>
  );
});

IconMaterialViewCarouselW100.displayName = 'AmauiIconMaterialViewCarouselW100';

export default IconMaterialViewCarouselW100;
