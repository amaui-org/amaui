import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialChairSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChairSharpFilled'
      short_name='Chair'

      {...props}
    >
      <path d="M4 21V19H1V10H5V15H19V10H23V19H20V21H18V19H6V21ZM7 13V8H4V3H20V8H17V13Z"/>
    </Icon>
  );
});

export default IconMaterialChairSharpFilled;
