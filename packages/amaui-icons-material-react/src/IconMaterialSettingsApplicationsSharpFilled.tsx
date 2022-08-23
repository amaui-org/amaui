import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSettingsApplicationsSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsApplicationsSharpFilled'
      short_name='SettingsApplications'

      {...props}
    >
      <path d="M3 21V3H21V21ZM11 17H13L13.3 15.5Q13.6 15.375 13.863 15.238Q14.125 15.1 14.4 14.9L15.85 15.35L16.85 13.65L15.7 12.65Q15.75 12.3 15.75 12Q15.75 11.7 15.7 11.35L16.85 10.35L15.85 8.65L14.4 9.1Q14.125 8.9 13.863 8.762Q13.6 8.625 13.3 8.5L13 7H11L10.7 8.5Q10.4 8.625 10.137 8.762Q9.875 8.9 9.6 9.1L8.15 8.65L7.15 10.35L8.3 11.35Q8.25 11.7 8.25 12Q8.25 12.3 8.3 12.65L7.15 13.65L8.15 15.35L9.6 14.9Q9.875 15.1 10.137 15.238Q10.4 15.375 10.7 15.5ZM12 14Q11.175 14 10.588 13.412Q10 12.825 10 12Q10 11.175 10.588 10.587Q11.175 10 12 10Q12.825 10 13.413 10.587Q14 11.175 14 12Q14 12.825 13.413 13.412Q12.825 14 12 14Z"/>
    </Icon>
  );
});

IconMaterialSettingsApplicationsSharpFilled.displayName = 'AmauiIconMaterialSettingsApplicationsSharpFilled';

export default IconMaterialSettingsApplicationsSharpFilled;
