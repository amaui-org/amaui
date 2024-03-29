import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPermDeviceInformationFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PermDeviceInformationFilled'

      short_name='PermDeviceInformation'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 16.5q-.425 0-.712-.288Q11 15.925 11 15.5V12q0-.425.288-.713Q11.575 11 12 11t.713.287Q13 11.575 13 12v3.5q0 .425-.287.712-.288.288-.713.288ZM12 9q-.425 0-.712-.288Q11 8.425 11 8t.288-.713Q11.575 7 12 7t.713.287Q13 7.575 13 8t-.287.712Q12.425 9 12 9ZM7 23q-.825 0-1.412-.587Q5 21.825 5 21V3q0-.825.588-1.413Q6.175 1 7 1h10q.825 0 1.413.587Q19 2.175 19 3v18q0 .825-.587 1.413Q17.825 23 17 23Zm0-5h10V6H7Z"/>
    </Icon>
  );
});

IconMaterialPermDeviceInformationFilled.displayName = 'AmauiIconMaterialPermDeviceInformationFilled';

export default IconMaterialPermDeviceInformationFilled;
