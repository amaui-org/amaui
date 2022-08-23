import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRefreshSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RefreshSharpW100'
      short_name='Refresh'

      {...props}
    >
      <path d="M12.1 18.7Q9.3 18.7 7.35 16.75Q5.4 14.8 5.4 12Q5.4 9.2 7.35 7.25Q9.3 5.3 12.1 5.3Q13.9 5.3 15.45 6.188Q17 7.075 17.9 8.65V5.3H18.6V10H13.9V9.3H17.45Q16.675 7.775 15.25 6.887Q13.825 6 12.1 6Q9.6 6 7.85 7.75Q6.1 9.5 6.1 12Q6.1 14.5 7.85 16.25Q9.6 18 12.1 18Q14.025 18 15.575 16.9Q17.125 15.8 17.75 14H18.5Q17.85 16.125 16.088 17.413Q14.325 18.7 12.1 18.7Z"/>
    </Icon>
  );
});

IconMaterialRefreshSharpW100.displayName = 'AmauiIconMaterialRefreshSharpW100';

export default IconMaterialRefreshSharpW100;
