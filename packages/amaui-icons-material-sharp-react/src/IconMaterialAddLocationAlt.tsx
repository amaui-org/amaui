import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddLocationAlt = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddLocationAlt'

      short_name='AddLocationAlt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M18 8h2V5h3V3h-3V0h-2v3h-3v2h3Zm-6 4q.825 0 1.413-.588Q14 10.825 14 10t-.587-1.413Q12.825 8 12 8q-.825 0-1.412.587Q10 9.175 10 10q0 .825.588 1.412Q11.175 12 12 12Zm0 10q-4.025-3.425-6.012-6.363Q4 12.7 4 10.2q0-3.75 2.413-5.975Q8.825 2 12 2q.25 0 .5.012.25.013.5.038v2.025q-.25-.05-.488-.063Q12.275 4 12 4 9.475 4 7.737 5.737 6 7.475 6 10.2q0 1.775 1.475 4.062Q8.95 16.55 12 19.35q3.05-2.8 4.525-5.088Q18 11.975 18 10.2V10h2v.2q0 2.5-1.987 5.437Q16.025 18.575 12 22Zm0-11.925Z"/>
    </Icon>
  );
});

IconMaterialAddLocationAlt.displayName = 'AmauiIconMaterialAddLocationAlt';

export default IconMaterialAddLocationAlt;
