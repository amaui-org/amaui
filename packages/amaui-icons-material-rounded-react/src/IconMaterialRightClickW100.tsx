import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRightClickW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RightClickW100'

      short_name='RightClick'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m507 762 10-30q53-13 88-56t35-100q0-66-47-113t-113-47q-57 0-99.5 34.5T325 539l-31 9q11-69 63-114.5T480 388q78 0 133 55t55 133q0 71-46 123t-115 63Zm-130-54L194 892q-6 6-15 6t-15-6q-6-6-6-15t6-15l184-183-55-18q-11-4-11-15t11-14l160-48q8-2 14.5 4.5T472 603l-48 160q-3 11-14 11t-15-11l-18-55Z"/>
    </Icon>
  );
});

IconMaterialRightClickW100.displayName = 'AmauiIconMaterialRightClickW100';

export default IconMaterialRightClickW100;
