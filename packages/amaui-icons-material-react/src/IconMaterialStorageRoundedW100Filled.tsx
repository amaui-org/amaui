import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialStorageRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='StorageRoundedW100Filled'
      short_name='Storage'

      {...props}
    >
      <path d="M4.4 19.45Q3.8 19.45 3.375 19.025Q2.95 18.6 2.95 18Q2.95 17.4 3.375 16.975Q3.8 16.55 4.4 16.55H19.6Q20.2 16.55 20.625 16.975Q21.05 17.4 21.05 18Q21.05 18.6 20.625 19.025Q20.2 19.45 19.6 19.45ZM5.35 18.75H6.85V17.25H5.35ZM4.4 7.45Q3.8 7.45 3.375 7.025Q2.95 6.6 2.95 6Q2.95 5.4 3.375 4.975Q3.8 4.55 4.4 4.55H19.6Q20.2 4.55 20.625 4.975Q21.05 5.4 21.05 6Q21.05 6.6 20.625 7.025Q20.2 7.45 19.6 7.45ZM5.35 6.75H6.85V5.25H5.35ZM4.4 13.45Q3.8 13.45 3.375 13.025Q2.95 12.6 2.95 12Q2.95 11.4 3.375 10.975Q3.8 10.55 4.4 10.55H19.6Q20.2 10.55 20.625 10.975Q21.05 11.4 21.05 12Q21.05 12.6 20.625 13.025Q20.2 13.45 19.6 13.45ZM5.35 12.75H6.85V11.25H5.35Z"/>
    </Icon>
  );
});

IconMaterialStorageRoundedW100Filled.displayName = 'AmauiIconMaterialStorageRoundedW100Filled';

export default IconMaterialStorageRoundedW100Filled;
