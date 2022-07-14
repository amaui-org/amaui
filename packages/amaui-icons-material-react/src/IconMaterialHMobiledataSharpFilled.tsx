import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHMobiledataSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HMobiledataSharpFilled'
      short_name='HMobiledata'

      {...props}
    >
      <path d="M7 17V7H9V11H15V7H17V17H15V13H9V17Z"/>
    </Icon>
  );
});

export default IconMaterialHMobiledataSharpFilled;
