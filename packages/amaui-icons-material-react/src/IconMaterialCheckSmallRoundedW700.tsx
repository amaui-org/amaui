import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCheckSmallRoundedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CheckSmallRoundedW700'
      short_name='CheckSmall'

      {...props}
    >
      <path d="m10 12.775 5.5-5.5q.475-.475 1.1-.475.625 0 1.1.475.475.475.475 1.112 0 .638-.475 1.113l-6.575 6.6q-.475.475-1.125.475T8.875 16.1l-2.6-2.6q-.475-.475-.463-1.113.013-.637.488-1.112.475-.475 1.113-.475.637 0 1.112.475Z"/>
    </Icon>
  )
});

export default IconMaterialCheckSmallRoundedW700;
