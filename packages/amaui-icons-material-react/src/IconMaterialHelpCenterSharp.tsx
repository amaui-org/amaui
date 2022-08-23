import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHelpCenterSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HelpCenterSharp'
      short_name='HelpCenter'

      {...props}
    >
      <path d="M3 21V3H21V21ZM5 19H19V5H5ZM12 18Q12.525 18 12.887 17.637Q13.25 17.275 13.25 16.75Q13.25 16.225 12.887 15.863Q12.525 15.5 12 15.5Q11.475 15.5 11.113 15.863Q10.75 16.225 10.75 16.75Q10.75 17.275 11.113 17.637Q11.475 18 12 18ZM11.1 14.15H12.95Q12.95 13.25 13.15 12.825Q13.35 12.4 14 11.75Q14.875 10.875 15.238 10.287Q15.6 9.7 15.6 8.95Q15.6 7.625 14.7 6.812Q13.8 6 12.275 6Q10.9 6 9.938 6.675Q8.975 7.35 8.6 8.55L10.25 9.2Q10.425 8.525 10.95 8.112Q11.475 7.7 12.175 7.7Q12.85 7.7 13.3 8.062Q13.75 8.425 13.75 9.025Q13.75 9.45 13.475 9.925Q13.2 10.4 12.55 10.975Q11.725 11.7 11.413 12.362Q11.1 13.025 11.1 14.15ZM5 19V5Z"/>
    </Icon>
  );
});

IconMaterialHelpCenterSharp.displayName = 'AmauiIconMaterialHelpCenterSharp';

export default IconMaterialHelpCenterSharp;
