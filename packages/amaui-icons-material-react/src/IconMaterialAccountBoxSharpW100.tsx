import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAccountBoxSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AccountBoxSharpW100'
      short_name='AccountBox'

      {...props}
    >
      <path d="M5 18.35Q6.35 17.025 8.138 16.262Q9.925 15.5 12 15.5Q14.075 15.5 15.863 16.262Q17.65 17.025 19 18.35V5H5ZM12 13.1Q13.2 13.1 14.025 12.275Q14.85 11.45 14.85 10.25Q14.85 9.05 14.025 8.225Q13.2 7.4 12 7.4Q10.8 7.4 9.975 8.225Q9.15 9.05 9.15 10.25Q9.15 11.45 9.975 12.275Q10.8 13.1 12 13.1ZM4.3 19.7V4.3H19.7V19.7ZM5.55 19H18.45V18.85Q17.05 17.5 15.413 16.85Q13.775 16.2 12 16.2Q10.275 16.2 8.625 16.837Q6.975 17.475 5.55 18.8ZM12 12.4Q11.125 12.4 10.488 11.762Q9.85 11.125 9.85 10.25Q9.85 9.375 10.488 8.738Q11.125 8.1 12 8.1Q12.875 8.1 13.512 8.738Q14.15 9.375 14.15 10.25Q14.15 11.125 13.512 11.762Q12.875 12.4 12 12.4ZM12 10.25Q12 10.25 12 10.25Q12 10.25 12 10.25Q12 10.25 12 10.25Q12 10.25 12 10.25Z"/>
    </Icon>
  );
});

IconMaterialAccountBoxSharpW100.displayName = 'AmauiIconMaterialAccountBoxSharpW100';

export default IconMaterialAccountBoxSharpW100;
