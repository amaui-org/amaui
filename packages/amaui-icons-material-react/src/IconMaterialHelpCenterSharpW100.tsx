import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHelpCenterSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HelpCenterSharpW100'
      short_name='HelpCenter'

      {...props}
    >
      <path d="M4.3 19.7V4.3H19.7V19.7ZM5 19H19V5H5ZM12.05 16.875Q12.325 16.875 12.513 16.688Q12.7 16.5 12.7 16.225Q12.7 15.95 12.513 15.762Q12.325 15.575 12.05 15.575Q11.775 15.575 11.588 15.762Q11.4 15.95 11.4 16.225Q11.4 16.5 11.588 16.688Q11.775 16.875 12.05 16.875ZM11.65 13.725H12.35Q12.4 13.125 12.613 12.738Q12.825 12.35 13.4 11.775Q14.075 11.1 14.388 10.587Q14.7 10.075 14.7 9.425Q14.7 8.3 13.925 7.612Q13.15 6.925 12.1 6.925Q11.125 6.925 10.413 7.463Q9.7 8 9.35 8.675L10.05 8.975Q10.325 8.4 10.775 8.012Q11.225 7.625 12.05 7.625Q13.075 7.625 13.538 8.188Q14 8.75 14 9.425Q14 9.95 13.725 10.35Q13.45 10.75 13 11.175Q12.2 11.925 11.925 12.5Q11.65 13.075 11.65 13.725ZM5 19V5Z"/>
    </Icon>
  );
});

IconMaterialHelpCenterSharpW100.displayName = 'AmauiIconMaterialHelpCenterSharpW100';

export default IconMaterialHelpCenterSharpW100;
