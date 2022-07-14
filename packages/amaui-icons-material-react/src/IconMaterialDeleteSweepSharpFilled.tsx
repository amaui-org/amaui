import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDeleteSweepSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeleteSweepSharpFilled'
      short_name='DeleteSweep'

      {...props}
    >
      <path d="M15 18V16H19V18ZM15 10V8H22V10ZM15 14V12H21V14ZM3 8H2V6H6V4.5H10V6H14V8H13V19H3Z"/>
    </Icon>
  );
});

export default IconMaterialDeleteSweepSharpFilled;
