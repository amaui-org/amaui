import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialManufacturingW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ManufacturingW100'

      short_name='Manufacturing'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m260-538-2-28q-21-4-39.5-14T186-606l-27 14-16-24 25-20q-8-21-8-44t8-44l-25-20 16-24 27 14q14-16 32.5-26t39.5-14l2-28h28l2 28q21 4 39.5 14t32.5 26l27-14 16 24-25 20q8 21 8 44t-8 44l25 20-16 24-27-14q-14 16-32.5 26T290-566l-2 28h-28Zm14-54q37 0 62.5-25.5T362-680q0-37-25.5-62.5T274-768q-37 0-62.5 25.5T186-680q0 37 25.5 62.5T274-592Zm360 449-4-30q-30-2-56-17t-43-40l-27 12-15-24 24-18q-14-29-14-60t14-60l-24-18 15-24 27 12q17-25 43-40t56-17l4-30h28l4 30q30 2 56 17t43 40l27-12 15 24-24 18q14 29 14 60t-14 60l24 18-15 24-27-12q-17 25-43 40t-56 17l-4 30h-28Zm14-57q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Z"/>
    </Icon>
  );
});

IconMaterialManufacturingW100.displayName = 'AmauiIconMaterialManufacturingW100';

export default IconMaterialManufacturingW100;
