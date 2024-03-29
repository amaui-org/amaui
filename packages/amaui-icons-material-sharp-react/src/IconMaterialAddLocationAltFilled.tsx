import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddLocationAltFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddLocationAltFilled'

      short_name='AddLocationAlt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M18 8V5h-3V3h3V0h2v3h3v2h-3v3Zm-6 4q.825 0 1.413-.588Q14 10.825 14 10t-.587-1.413Q12.825 8 12 8q-.825 0-1.412.587Q10 9.175 10 10q0 .825.588 1.412Q11.175 12 12 12Zm0 10q-4.025-3.425-6.012-6.363Q4 12.7 4 10.2q0-3.75 2.413-5.975Q8.825 2 12 2q.5 0 1 .062.5.063 1 .188V6h3v3h2.925q.05.3.063.6.012.3.012.6 0 2.5-1.987 5.437Q16.025 18.575 12 22Z"/>
    </Icon>
  );
});

IconMaterialAddLocationAltFilled.displayName = 'AmauiIconMaterialAddLocationAltFilled';

export default IconMaterialAddLocationAltFilled;
