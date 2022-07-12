import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArrowDownwardOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowDownwardOutlinedW700'
      short_name='ArrowDownward'

      {...props}
    >
      <path d="M12 20.375 3.625 12 5.85 9.75 10.425 14.325V3.625H13.575V14.325L18.15 9.75L20.375 12Z"/>
    </Icon>
  )
});

export default IconMaterialArrowDownwardOutlinedW700;
