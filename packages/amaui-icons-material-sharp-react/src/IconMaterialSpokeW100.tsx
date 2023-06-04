import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSpokeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpokeW100'

      short_name='Spoke'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 9.7q-1.125 0-1.912-.788Q9.3 8.125 9.3 7t.788-1.913Q10.875 4.3 12 4.3t1.913.787Q14.7 5.875 14.7 7t-.787 1.912Q13.125 9.7 12 9.7Zm0-.7q.825 0 1.413-.588Q14 7.825 14 7t-.587-1.412Q12.825 5 12 5q-.825 0-1.412.588Q10 6.175 10 7t.588 1.412Q11.175 9 12 9ZM7 19.7q-1.125 0-1.912-.787Q4.3 18.125 4.3 17t.788-1.913Q5.875 14.3 7 14.3t1.913.787Q9.7 15.875 9.7 17t-.787 1.913Q8.125 19.7 7 19.7Zm0-.7q.825 0 1.412-.587Q9 17.825 9 17q0-.825-.588-1.412Q7.825 15 7 15t-1.412.588Q5 16.175 5 17t.588 1.413Q6.175 19 7 19Zm10 .7q-1.125 0-1.912-.787Q14.3 18.125 14.3 17t.788-1.913Q15.875 14.3 17 14.3t1.913.787q.787.788.787 1.913t-.787 1.913q-.788.787-1.913.787Zm0-.7q.825 0 1.413-.587Q19 17.825 19 17q0-.825-.587-1.412Q17.825 15 17 15q-.825 0-1.412.588Q15 16.175 15 17t.588 1.413Q16.175 19 17 19ZM12 7ZM7 17Zm10 0Z"/>
    </Icon>
  );
});

IconMaterialSpokeW100.displayName = 'AmauiIconMaterialSpokeW100';

export default IconMaterialSpokeW100;
