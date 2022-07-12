import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPostAddSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PostAddSharp'
      short_name='PostAdd'

      {...props}
    >
      <path d="M8 11V9H16V11ZM8 14V12H16V14ZM8 17V15H16V17ZM17 9V7H15V5H17V3H19V5H21V7H19V9ZM3 21V3H14V5H5V19H19V10H21V21Z"/>
    </Icon>
  )
});

export default IconMaterialPostAddSharp;
