import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAccountBoxSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AccountBoxSharpW100Filled'
      short_name='AccountBox'

      {...props}
    >
      <path d="M12 13.1Q13.2 13.1 14.025 12.275Q14.85 11.45 14.85 10.25Q14.85 9.05 14.025 8.225Q13.2 7.4 12 7.4Q10.8 7.4 9.975 8.225Q9.15 9.05 9.15 10.25Q9.15 11.45 9.975 12.275Q10.8 13.1 12 13.1ZM4.3 19.7V4.3H19.7V19.7ZM5 19H19V18.35Q17.65 17.025 15.863 16.262Q14.075 15.5 12 15.5Q9.925 15.5 8.138 16.262Q6.35 17.025 5 18.35Z"/>
    </Icon>
  );
});

IconMaterialAccountBoxSharpW100Filled.displayName = 'AmauiIconMaterialAccountBoxSharpW100Filled';

export default IconMaterialAccountBoxSharpW100Filled;
