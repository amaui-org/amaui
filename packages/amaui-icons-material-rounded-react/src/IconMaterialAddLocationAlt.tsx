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
      <path d="M19 8q.425 0 .712-.287Q20 7.425 20 7V5h2q.425 0 .712-.288Q23 4.425 23 4t-.288-.713Q22.425 3 22 3h-2V1q0-.425-.288-.713Q19.425 0 19 0t-.712.287Q18 .575 18 1v2h-2q-.425 0-.712.287Q15 3.575 15 4t.288.712Q15.575 5 16 5h2v2q0 .425.288.713Q18.575 8 19 8Zm-7 4q.825 0 1.413-.588Q14 10.825 14 10t-.587-1.413Q12.825 8 12 8q-.825 0-1.412.587Q10 9.175 10 10q0 .825.588 1.412Q11.175 12 12 12Zm0 9.625q-.2 0-.4-.075t-.35-.2Q7.6 18.125 5.8 15.363 4 12.6 4 10.2q0-3.75 2.413-5.975Q8.825 2 12 2q.25 0 .5.012.25.013.5.038v2.025q-.25-.05-.488-.063Q12.275 4 12 4 9.475 4 7.737 5.737 6 7.475 6 10.2q0 1.775 1.475 4.062Q8.95 16.55 12 19.35q3.05-2.8 4.525-5.088Q18 11.975 18 10.2V10h2v.2q0 2.4-1.8 5.163-1.8 2.762-5.45 5.987-.15.125-.35.2-.2.075-.4.075ZM13 10.7Z"/>
    </Icon>
  );
});

IconMaterialAddLocationAlt.displayName = 'AmauiIconMaterialAddLocationAlt';

export default IconMaterialAddLocationAlt;
