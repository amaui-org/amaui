import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialViewCarouselFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewCarouselFilled'

      short_name='ViewCarousel'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 7h4v10H2Zm5-2h10v14H7Zm11 2h4v10h-4Z"/>
    </Icon>
  );
});

IconMaterialViewCarouselFilled.displayName = 'AmauiIconMaterialViewCarouselFilled';

export default IconMaterialViewCarouselFilled;
