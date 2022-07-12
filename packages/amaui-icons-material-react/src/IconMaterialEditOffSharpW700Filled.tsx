import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEditOffSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditOffSharpW700Filled'
      short_name='EditOff'

      {...props}
    >
      <path d="M19.5 22.9 12.55 15.975 7.125 21.4H2.725V17.025L8.175 11.575L1.1 4.5L2.775 2.825L21.175 21.225ZM15.675 12.85 11.275 8.475 13.475 6.275 17.875 10.65ZM19.3 9.2 14.925 4.85 17.825 1.925 22.3 6.225Z"/>
    </Icon>
  )
});

export default IconMaterialEditOffSharpW700Filled;
