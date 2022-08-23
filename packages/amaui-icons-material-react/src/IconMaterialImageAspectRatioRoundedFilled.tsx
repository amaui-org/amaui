import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialImageAspectRatioRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ImageAspectRatioRoundedFilled'
      short_name='ImageAspectRatio'

      {...props}
    >
      <path d="M14 12H16V10H14ZM14 16H16V14H14ZM6 12H8V10H6ZM10 12H12V10H10ZM4 20Q3.175 20 2.588 19.413Q2 18.825 2 18V6Q2 5.175 2.588 4.588Q3.175 4 4 4H20Q20.825 4 21.413 4.588Q22 5.175 22 6V18Q22 18.825 21.413 19.413Q20.825 20 20 20Z"/>
    </Icon>
  );
});

IconMaterialImageAspectRatioRoundedFilled.displayName = 'AmauiIconMaterialImageAspectRatioRoundedFilled';

export default IconMaterialImageAspectRatioRoundedFilled;
