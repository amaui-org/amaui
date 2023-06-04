import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialViewCarousel = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewCarousel'

      short_name='ViewCarousel'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 7h4v10H2Zm5-2h10v14H7Zm2 2v10Zm9 0h4v10h-4ZM9 7v10h6V7Z"/>
    </Icon>
  );
});

IconMaterialViewCarousel.displayName = 'AmauiIconMaterialViewCarousel';

export default IconMaterialViewCarousel;
