import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMagicButtonTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MagicButtonTwoTone'
      short_name='MagicButton'

      {...props}
    >
      <path d="M9.8 19.725 7.025 13.65 0.975 10.9 7.025 8.15 9.8 2.075 12.55 8.15 18.625 10.9 12.55 13.65ZM18.625 21.925 17.25 18.875 14.2 17.525 17.25 16.125 18.625 13.1 20 16.125 23.025 17.525 20 18.875Z"/>
    </Icon>
  )
});

export default IconMaterialMagicButtonTwoTone;
