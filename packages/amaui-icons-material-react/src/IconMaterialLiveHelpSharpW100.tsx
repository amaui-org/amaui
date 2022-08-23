import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLiveHelpSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LiveHelpSharpW100'
      short_name='LiveHelp'

      {...props}
    >
      <path d="M12.05 15.875Q12.325 15.875 12.513 15.688Q12.7 15.5 12.7 15.225Q12.7 14.95 12.513 14.762Q12.325 14.575 12.05 14.575Q11.775 14.575 11.588 14.762Q11.4 14.95 11.4 15.225Q11.4 15.5 11.588 15.688Q11.775 15.875 12.05 15.875ZM12.35 12.725Q12.4 12.125 12.613 11.738Q12.825 11.35 13.4 10.775Q14.075 10.1 14.388 9.587Q14.7 9.075 14.7 8.425Q14.7 7.3 13.925 6.613Q13.15 5.925 12.1 5.925Q11.125 5.925 10.413 6.463Q9.7 7 9.35 7.675L10.05 7.975Q10.325 7.4 10.775 7.012Q11.225 6.625 12.05 6.625Q13.075 6.625 13.538 7.188Q14 7.75 14 8.425Q14 8.95 13.725 9.35Q13.45 9.75 13 10.175Q12.2 10.925 11.925 11.5Q11.65 12.075 11.65 12.725ZM12 21.15 9.55 18.7H4.3V3.3H19.7V18.7H14.45ZM5 18H9.85L12 20.15L14.15 18H19V4H5ZM5 4V18Z"/>
    </Icon>
  );
});

IconMaterialLiveHelpSharpW100.displayName = 'AmauiIconMaterialLiveHelpSharpW100';

export default IconMaterialLiveHelpSharpW100;
