import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBedW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BedW100'

      short_name='Bed'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.3 17.7v-6.25h1V7.6h15.4v3.85h1v6.25H20v-2H4v2Zm9.05-6.4H19v-3h-6.65ZM5 11.3h6.65v-3H5ZM4 15h16v-3H4Zm16 0H4Z"/>
    </Icon>
  );
});

IconMaterialBedW100.displayName = 'AmauiIconMaterialBedW100';

export default IconMaterialBedW100;
