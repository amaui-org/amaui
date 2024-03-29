import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDataAlertFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DataAlertFilled'

      short_name='DataAlert'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M160 896q-17 0-28.5-11.5T120 856q0-17 11.5-28.5T160 816h400q17 0 28.5 11.5T600 856q0 17-11.5 28.5T560 896H160Zm480-280q-83 0-141.5-58.5T440 416q0-83 58.5-141.5T640 216q83 0 141.5 58.5T840 416q0 83-58.5 141.5T640 616Zm-480-40q-17 0-28.5-11.5T120 536q0-17 11.5-28.5T160 496h212q7 22 16 42t22 38H160Zm0 160q-17 0-28.5-11.5T120 696q0-17 11.5-28.5T160 656h336q23 14 49 23.5t55 13.5v3q0 17-11.5 28.5T560 736H160Zm480-280q8 0 14-6t6-14V316q0-8-6-14t-14-6q-8 0-14 6t-6 14v120q0 8 6 14t14 6Zm0 80q8 0 14-6t6-14q0-8-6-14t-14-6q-8 0-14 6t-6 14q0 8 6 14t14 6Z"/>
    </Icon>
  );
});

IconMaterialDataAlertFilled.displayName = 'AmauiIconMaterialDataAlertFilled';

export default IconMaterialDataAlertFilled;
