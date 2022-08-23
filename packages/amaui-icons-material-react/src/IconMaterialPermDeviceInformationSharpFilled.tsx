import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPermDeviceInformationSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PermDeviceInformationSharpFilled'
      short_name='PermDeviceInformation'

      {...props}
    >
      <path d="M11 16.5V11H13V16.5ZM12 9Q11.575 9 11.288 8.712Q11 8.425 11 8Q11 7.575 11.288 7.287Q11.575 7 12 7Q12.425 7 12.713 7.287Q13 7.575 13 8Q13 8.425 12.713 8.712Q12.425 9 12 9ZM5 23V1H19V23ZM7 18H17V6H7Z"/>
    </Icon>
  );
});

IconMaterialPermDeviceInformationSharpFilled.displayName = 'AmauiIconMaterialPermDeviceInformationSharpFilled';

export default IconMaterialPermDeviceInformationSharpFilled;
