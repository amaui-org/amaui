import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPermDeviceInformationRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PermDeviceInformationRoundedFilled'
      short_name='PermDeviceInformation'

      {...props}
    >
      <path d="M12 16.5Q11.575 16.5 11.288 16.212Q11 15.925 11 15.5V12Q11 11.575 11.288 11.287Q11.575 11 12 11Q12.425 11 12.713 11.287Q13 11.575 13 12V15.5Q13 15.925 12.713 16.212Q12.425 16.5 12 16.5ZM12 9Q11.575 9 11.288 8.712Q11 8.425 11 8Q11 7.575 11.288 7.287Q11.575 7 12 7Q12.425 7 12.713 7.287Q13 7.575 13 8Q13 8.425 12.713 8.712Q12.425 9 12 9ZM7 23Q6.175 23 5.588 22.413Q5 21.825 5 21V3Q5 2.175 5.588 1.587Q6.175 1 7 1H17Q17.825 1 18.413 1.587Q19 2.175 19 3V21Q19 21.825 18.413 22.413Q17.825 23 17 23ZM7 18H17V6H7Z"/>
    </Icon>
  );
});

IconMaterialPermDeviceInformationRoundedFilled.displayName = 'AmauiIconMaterialPermDeviceInformationRoundedFilled';

export default IconMaterialPermDeviceInformationRoundedFilled;
