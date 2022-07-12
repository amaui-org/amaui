import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArrowBackIosNewSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowBackIosNewSharpFilled'
      short_name='ArrowBackIosNew'

      {...props}
    >
      <path d="M16 22 6 12 16 2 17.775 3.775 9.55 12 17.775 20.225Z"/>
    </Icon>
  )
});

export default IconMaterialArrowBackIosNewSharpFilled;
