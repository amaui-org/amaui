import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArrowBackIosRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowBackIosRounded'
      short_name='ArrowBackIos'

      {...props}
    >
      <path d="M9.125 21.1 0.7 12.7Q0.55 12.55 0.488 12.375Q0.425 12.2 0.425 12Q0.425 11.8 0.488 11.625Q0.55 11.45 0.7 11.3L9.125 2.875Q9.475 2.525 10 2.525Q10.525 2.525 10.9 2.9Q11.275 3.275 11.275 3.775Q11.275 4.275 10.9 4.65L3.55 12L10.9 19.35Q11.25 19.7 11.25 20.212Q11.25 20.725 10.875 21.1Q10.5 21.475 10 21.475Q9.5 21.475 9.125 21.1Z"/>
    </Icon>
  );
});

IconMaterialArrowBackIosRounded.displayName = 'AmauiIconMaterialArrowBackIosRounded';

export default IconMaterialArrowBackIosRounded;
