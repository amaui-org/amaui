import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSecurityUpdateWarningSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SecurityUpdateWarningSharp'
      short_name='SecurityUpdateWarning'

      {...props}
    >
      <path d="M11 13V7H13V13ZM12 17Q11.575 17 11.288 16.712Q11 16.425 11 16Q11 15.575 11.288 15.287Q11.575 15 12 15Q12.425 15 12.713 15.287Q13 15.575 13 16Q13 16.425 12.713 16.712Q12.425 17 12 17ZM5 23V1H19V23ZM7 18H17V6H7ZM7 21H17V20H7ZM7 4H17V3H7ZM7 4V3V4ZM7 21V20V21Z"/>
    </Icon>
  );
});

IconMaterialSecurityUpdateWarningSharp.displayName = 'AmauiIconMaterialSecurityUpdateWarningSharp';

export default IconMaterialSecurityUpdateWarningSharp;
