import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFilterBAndWSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterBAndWSharpFilled'
      short_name='FilterBAndW'

      {...props}
    >
      <path d="M3 21V3H21V21ZM5 19H12V11L19 19V5H12V11Z"/>
    </Icon>
  );
});

export default IconMaterialFilterBAndWSharpFilled;
