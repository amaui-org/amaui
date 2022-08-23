import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRefreshRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RefreshRoundedW100'
      short_name='Refresh'

      {...props}
    >
      <path d="M12.1 18.7Q9.3 18.7 7.35 16.75Q5.4 14.8 5.4 12Q5.4 9.2 7.35 7.25Q9.3 5.3 12.1 5.3Q13.9 5.3 15.45 6.188Q17 7.075 17.9 8.65V5.65Q17.9 5.5 18 5.4Q18.1 5.3 18.25 5.3Q18.4 5.3 18.5 5.4Q18.6 5.5 18.6 5.65V9.25Q18.6 9.575 18.388 9.787Q18.175 10 17.85 10H14.25Q14.1 10 14 9.9Q13.9 9.8 13.9 9.65Q13.9 9.5 14 9.4Q14.1 9.3 14.25 9.3H17.45Q16.675 7.775 15.25 6.887Q13.825 6 12.1 6Q9.6 6 7.85 7.75Q6.1 9.5 6.1 12Q6.1 14.5 7.85 16.25Q9.6 18 12.1 18Q13.975 18 15.5 16.975Q17.025 15.95 17.675 14.225Q17.725 14.125 17.8 14.062Q17.875 14 18 14Q18.2 14 18.3 14.137Q18.4 14.275 18.325 14.475Q17.6 16.4 15.9 17.55Q14.2 18.7 12.1 18.7Z"/>
    </Icon>
  );
});

IconMaterialRefreshRoundedW100.displayName = 'AmauiIconMaterialRefreshRoundedW100';

export default IconMaterialRefreshRoundedW100;
