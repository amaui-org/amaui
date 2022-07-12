import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPostAddSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PostAddSharpW700Filled'
      short_name='PostAdd'

      {...props}
    >
      <path d="M8 11V9H16V11ZM8 14V12H16V14ZM8 17V15H16V17ZM17.2 9.075V6.8H14.925V4.425H17.2V2.15H19.575V4.425H21.85V6.8H19.575V9.075ZM2.15 21.85V2.15H13.925V5.3H5.3V18.7H18.7V10.075H21.85V21.85Z"/>
    </Icon>
  )
});

export default IconMaterialPostAddSharpW700Filled;
