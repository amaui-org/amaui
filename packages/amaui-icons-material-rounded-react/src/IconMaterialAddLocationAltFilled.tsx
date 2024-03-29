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
      <path d="M19 8q.425 0 .712-.287Q20 7.425 20 7V5h2q.425 0 .712-.288Q23 4.425 23 4t-.288-.713Q22.425 3 22 3h-2V1q0-.425-.288-.713Q19.425 0 19 0t-.712.287Q18 .575 18 1v2h-2q-.425 0-.712.287Q15 3.575 15 4t.288.712Q15.575 5 16 5h2v2q0 .425.288.713Q18.575 8 19 8Zm-7 4q.825 0 1.413-.588Q14 10.825 14 10t-.587-1.413Q12.825 8 12 8q-.825 0-1.412.587Q10 9.175 10 10q0 .825.588 1.412Q11.175 12 12 12Zm0 9.625q-.2 0-.4-.075t-.35-.2Q7.6 18.125 5.8 15.363 4 12.6 4 10.2q0-3.75 2.413-5.975Q8.825 2 12 2q.7 0 1.388.112.687.113 1.337.363-.325.25-.525.65T14 4q0 .825.588 1.412Q15.175 6 16 6h1v1q0 .825.587 1.412Q18.175 9 19 9q.25 0 .475-.05.225-.05.425-.15.05.35.075.7.025.35.025.7 0 2.4-1.8 5.163-1.8 2.762-5.45 5.987-.15.125-.35.2-.2.075-.4.075Z"/>
    </Icon>
  );
});

IconMaterialAddLocationAltFilled.displayName = 'AmauiIconMaterialAddLocationAltFilled';

export default IconMaterialAddLocationAltFilled;
