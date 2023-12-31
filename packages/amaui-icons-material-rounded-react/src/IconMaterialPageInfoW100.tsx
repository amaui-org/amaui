import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPageInfoW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PageInfoW100'

      short_name='PageInfo'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M700-212q-37 0-62.5-25.5T612-300q0-37 25.5-62.5T700-388q37 0 62.5 25.5T788-300q0 37-25.5 62.5T700-212Zm0-28q25 0 42.5-17.5T760-300q0-25-17.5-42.5T700-360q-25 0-42.5 17.5T640-300q0 25 17.5 42.5T700-240Zm-222-46H186q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h292q5.95 0 9.975 4.035 4.025 4.035 4.025 10T487.975-290q-4.025 4-9.975 4ZM260-572q-37 0-62.5-25.5T172-660q0-37 25.5-62.5T260-748q37 0 62.5 25.5T348-660q0 37-25.5 62.5T260-572Zm0-28q25 0 42.5-17.5T320-660q0-25-17.5-42.5T260-720q-25 0-42.5 17.5T200-660q0 25 17.5 42.5T260-600Zm514-46H482q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h292q5.95 0 9.975 4.035 4.025 4.035 4.025 10T783.975-650q-4.025 4-9.975 4Z"/>
    </Icon>
  );
});

IconMaterialPageInfoW100.displayName = 'AmauiIconMaterialPageInfoW100';

export default IconMaterialPageInfoW100;
