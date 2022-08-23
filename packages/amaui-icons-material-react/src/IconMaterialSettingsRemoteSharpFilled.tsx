import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSettingsRemoteSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsRemoteSharpFilled'
      short_name='SettingsRemote'

      {...props}
    >
      <path d="M8 23V9H16V23ZM12 14.25Q12.525 14.25 12.887 13.887Q13.25 13.525 13.25 13Q13.25 12.475 12.887 12.113Q12.525 11.75 12 11.75Q11.475 11.75 11.113 12.113Q10.75 12.475 10.75 13Q10.75 13.525 11.113 13.887Q11.475 14.25 12 14.25ZM8.45 7.45 7.05 6.05Q8 5.1 9.262 4.55Q10.525 4 12 4Q13.475 4 14.738 4.55Q16 5.1 16.95 6.05L15.55 7.45Q14.875 6.775 13.963 6.387Q13.05 6 12 6Q10.95 6 10.038 6.387Q9.125 6.775 8.45 7.45ZM5.65 4.65 4.2 3.2Q5.7 1.725 7.7 0.862Q9.7 0 12 0Q14.3 0 16.288 0.875Q18.275 1.75 19.75 3.25L18.35 4.65Q17.15 3.4 15.513 2.7Q13.875 2 12 2Q10.125 2 8.488 2.7Q6.85 3.4 5.65 4.65Z"/>
    </Icon>
  );
});

IconMaterialSettingsRemoteSharpFilled.displayName = 'AmauiIconMaterialSettingsRemoteSharpFilled';

export default IconMaterialSettingsRemoteSharpFilled;
