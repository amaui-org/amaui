import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialViewCompactSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewCompactSharpFilled'
      short_name='ViewCompact'

      {...props}
    >
      <path d="M2 11V4H22V11ZM10 20V13H22V20ZM2 20V13H8V20Z"/>
    </Icon>
  );
});

export default IconMaterialViewCompactSharpFilled;
