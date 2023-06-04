import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddLocationFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddLocationFilled'

      short_name='AddLocation'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 14h2v-3h3V9h-3V6h-2v3H8v2h3Zm1 8q-4.025-3.425-6.012-6.363Q4 12.7 4 10.2q0-3.75 2.413-5.975Q8.825 2 12 2t5.587 2.225Q20 6.45 20 10.2q0 2.5-1.987 5.437Q16.025 18.575 12 22Z"/>
    </Icon>
  );
});

IconMaterialAddLocationFilled.displayName = 'AmauiIconMaterialAddLocationFilled';

export default IconMaterialAddLocationFilled;
