import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialGMobiledataSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='GMobiledataSharp'
      short_name='GMobiledata'

      {...props}
    >
      <path d="M7 17V7H16V9H9V15H14V13H12V11H16V17Z"/>
    </Icon>
  )
});

export default IconMaterialGMobiledataSharp;
