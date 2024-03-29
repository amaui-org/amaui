import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCastle = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Castle'

      short_name='Castle'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 21q-.825 0-1.412-.587Q1 19.825 1 19v-9q0-.425.288-.713Q1.575 9 2 9t.713.287Q3 9.575 3 10v1h2V4q0-.425.287-.713Q5.575 3 6 3t.713.287Q7 3.575 7 4v1h2V4q0-.425.288-.713Q9.575 3 10 3t.713.287Q11 3.575 11 4v1h2V4q0-.425.288-.713Q13.575 3 14 3t.713.287Q15 3.575 15 4v1h2V4q0-.425.288-.713Q17.575 3 18 3t.712.287Q19 3.575 19 4v7h2v-1q0-.425.288-.713Q21.575 9 22 9t.712.287Q23 9.575 23 10v9q0 .825-.587 1.413Q21.825 21 21 21h-7v-3q0-.825-.587-1.413Q12.825 16 12 16q-.825 0-1.412.587Q10 17.175 10 18v3Zm0-2h5v-1q0-1.65 1.175-2.825Q10.35 14 12 14q1.65 0 2.825 1.175Q16 16.35 16 18v1h5v-6h-4V7H7v6H3Zm6-7h2V9H9Zm4 0h2V9h-2Zm-1 1Z"/>
    </Icon>
  );
});

IconMaterialCastle.displayName = 'AmauiIconMaterialCastle';

export default IconMaterialCastle;
