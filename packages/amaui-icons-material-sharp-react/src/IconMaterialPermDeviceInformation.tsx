import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPermDeviceInformation = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PermDeviceInformation'

      short_name='PermDeviceInformation'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 16.5V11h2v5.5ZM12 9q-.425 0-.712-.288Q11 8.425 11 8t.288-.713Q11.575 7 12 7t.713.287Q13 7.575 13 8t-.287.712Q12.425 9 12 9ZM5 23V1h14v22Zm2-5h10V6H7Zm0 3h10v-1H7ZM7 4h10V3H7Zm0 0V3v1Zm0 17v-1 1Z"/>
    </Icon>
  );
});

IconMaterialPermDeviceInformation.displayName = 'AmauiIconMaterialPermDeviceInformation';

export default IconMaterialPermDeviceInformation;
