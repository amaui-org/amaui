import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMouseRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MouseRoundedW700Filled'
      short_name='Mouse'

      {...props}
    >
      <path d="M12 22.85Q8.75 22.85 6.45 20.55Q4.15 18.25 4.15 15V11H19.85V15Q19.85 18.25 17.55 20.55Q15.25 22.85 12 22.85ZM4.15 9Q4.15 6.025 6.138 3.8Q8.125 1.575 11 1.2V9ZM13 9V1.2Q15.875 1.575 17.863 3.8Q19.85 6.025 19.85 9Z"/>
    </Icon>
  )
});

export default IconMaterialMouseRoundedW700Filled;
