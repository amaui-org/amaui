import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialExpandMoreSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExpandMoreSharpFilled'
      short_name='ExpandMore'

      {...props}
    >
      <path d="M12 15.375 6 9.375 7.4 7.975 12 12.575 16.6 7.975 18 9.375Z"/>
    </Icon>
  );
});

export default IconMaterialExpandMoreSharpFilled;
