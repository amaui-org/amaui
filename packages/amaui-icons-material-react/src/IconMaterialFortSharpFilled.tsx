import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFortSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FortSharpFilled'
      short_name='Fort'

      {...props}
    >
      <path d="M1 21V17L3 15V9L1 7V3H3V5H5V3H7V5H9V3H11V7L9 9V10H15V9L13 7V3H15V5H17V3H19V5H21V3H23V7L21 9V15L23 17V21H14V16H10V21Z"/>
    </Icon>
  );
});

export default IconMaterialFortSharpFilled;
