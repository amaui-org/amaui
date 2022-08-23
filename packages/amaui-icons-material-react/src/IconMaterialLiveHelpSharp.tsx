import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLiveHelpSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LiveHelpSharp'
      short_name='LiveHelp'

      {...props}
    >
      <path d="M11.95 16.8Q12.475 16.8 12.838 16.438Q13.2 16.075 13.2 15.55Q13.2 15.025 12.838 14.662Q12.475 14.3 11.95 14.3Q11.425 14.3 11.062 14.662Q10.7 15.025 10.7 15.55Q10.7 16.075 11.062 16.438Q11.425 16.8 11.95 16.8ZM12.9 12.95Q12.9 12.05 13.1 11.625Q13.3 11.2 13.95 10.55Q14.825 9.675 15.188 9.087Q15.55 8.5 15.55 7.75Q15.55 6.425 14.65 5.612Q13.75 4.8 12.225 4.8Q10.85 4.8 9.888 5.475Q8.925 6.15 8.55 7.35L10.2 8Q10.375 7.325 10.9 6.912Q11.425 6.5 12.125 6.5Q12.8 6.5 13.25 6.862Q13.7 7.225 13.7 7.825Q13.7 8.25 13.425 8.725Q13.15 9.2 12.5 9.775Q11.675 10.5 11.363 11.162Q11.05 11.825 11.05 12.95ZM12 23 9 20H3V2H21V20H15ZM5 18H9.8L12 20.2L14.2 18H19V4H5ZM5 4V18Z"/>
    </Icon>
  );
});

IconMaterialLiveHelpSharp.displayName = 'AmauiIconMaterialLiveHelpSharp';

export default IconMaterialLiveHelpSharp;
