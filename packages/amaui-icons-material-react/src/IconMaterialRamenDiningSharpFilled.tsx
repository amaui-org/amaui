import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRamenDiningSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RamenDiningSharpFilled'
      short_name='RamenDining'

      {...props}
    >
      <path d="M8 22V20.25Q5.325 19.2 3.663 17Q2 14.8 2 12H4V4L22 2V3.5L10.5 4.8V6.5H22V8H10.5V12H22Q22 14.8 20.337 17Q18.675 19.2 16 20.25V22ZM8 6.5H9V4.95L8 5.05ZM5.5 6.5H6.5V5.25L5.5 5.35ZM8 12H9V8H8ZM5.5 12H6.5V8H5.5Z"/>
    </Icon>
  );
});

IconMaterialRamenDiningSharpFilled.displayName = 'AmauiIconMaterialRamenDiningSharpFilled';

export default IconMaterialRamenDiningSharpFilled;
