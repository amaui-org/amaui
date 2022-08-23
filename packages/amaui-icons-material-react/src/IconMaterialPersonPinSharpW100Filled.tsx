import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPersonPinSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonPinSharpW100Filled'
      short_name='PersonPin'

      {...props}
    >
      <path d="M12 21.15 9.55 18.7H4.3V3.3H19.7V18.7H14.45ZM12 12.1Q13.2 12.1 14.025 11.275Q14.85 10.45 14.85 9.25Q14.85 8.05 14.025 7.225Q13.2 6.4 12 6.4Q10.8 6.4 9.975 7.225Q9.15 8.05 9.15 9.25Q9.15 10.45 9.975 11.275Q10.8 12.1 12 12.1ZM12 20.15 14.15 18H19V17.35Q17.65 16.025 15.863 15.262Q14.075 14.5 12 14.5Q9.925 14.5 8.138 15.262Q6.35 16.025 5 17.35V18H9.85Z"/>
    </Icon>
  );
});

IconMaterialPersonPinSharpW100Filled.displayName = 'AmauiIconMaterialPersonPinSharpW100Filled';

export default IconMaterialPersonPinSharpW100Filled;
