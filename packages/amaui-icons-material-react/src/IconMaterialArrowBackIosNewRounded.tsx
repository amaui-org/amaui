import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArrowBackIosNewRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowBackIosNewRounded'
      short_name='ArrowBackIosNew'

      {...props}
    >
      <path d="M15.125 21.1 6.7 12.7Q6.55 12.55 6.488 12.375Q6.425 12.2 6.425 12Q6.425 11.8 6.488 11.625Q6.55 11.45 6.7 11.3L15.125 2.875Q15.475 2.525 16 2.525Q16.525 2.525 16.9 2.9Q17.275 3.275 17.275 3.775Q17.275 4.275 16.9 4.65L9.55 12L16.9 19.35Q17.25 19.7 17.25 20.212Q17.25 20.725 16.875 21.1Q16.5 21.475 16 21.475Q15.5 21.475 15.125 21.1Z"/>
    </Icon>
  );
});

IconMaterialArrowBackIosNewRounded.displayName = 'AmauiIconMaterialArrowBackIosNewRounded';

export default IconMaterialArrowBackIosNewRounded;
