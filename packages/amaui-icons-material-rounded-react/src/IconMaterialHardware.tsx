import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHardware = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Hardware'

      short_name='Hardware'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10 21q-.425 0-.712-.288Q9 20.425 9 20V8H4q0-2.075 1.463-3.537Q6.925 3 9 3h4q.825 0 1.413.587Q15 4.175 15 5v1l2.575-2.575q.175-.175.475-.3T18.625 3q.575 0 .975.4t.4.975v5.25q0 .575-.413.975-.412.4-.987.4-.25 0-.55-.125-.3-.125-.475-.3L15 8v12q0 .425-.287.712Q14.425 21 14 21Zm3-9Zm-2 7h2v-6h-2Zm0-8h2V5H9q-.65 0-1.225.262-.575.263-1 .738H11Zm2 0V5v6Zm0 8v-6 6Z"/>
    </Icon>
  );
});

IconMaterialHardware.displayName = 'AmauiIconMaterialHardware';

export default IconMaterialHardware;
