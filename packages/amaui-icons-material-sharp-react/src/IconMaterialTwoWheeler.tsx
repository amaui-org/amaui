import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTwoWheeler = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TwoWheeler'

      short_name='TwoWheeler'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 19q-1.65 0-2.825-1.175Q0 16.65 0 15q0-1.425.913-2.525.912-1.1 2.337-1.375l-.7-.6H0V9h4.5L7 10.5 11 9h3.15L12.6 7H10V5h3.55l2.1 2.7L19 6v3h-2.3l1.75 2.3q.375-.15.762-.225Q19.6 11 20 11q1.65 0 2.825 1.175Q24 13.35 24 15q0 1.65-1.175 2.825Q21.65 19 20 19q-1.65 0-2.825-1.175Q16 16.65 16 15q0-.675.238-1.312.237-.638.662-1.188l-.5-.6L13 17h-3l-2-1.75q-.125 1.575-1.275 2.663Q5.575 19 4 19Zm0-2q.825 0 1.412-.587Q6 15.825 6 15q0-.825-.588-1.413Q4.825 13 4 13t-1.412.587Q2 14.175 2 15q0 .825.588 1.413Q3.175 17 4 17Zm7.35-6-3.6 1.35 3.6-1.35h3.25ZM20 17q.825 0 1.413-.587Q22 15.825 22 15q0-.825-.587-1.413Q20.825 13 20 13q-.825 0-1.413.587Q18 14.175 18 15q0 .825.587 1.413Q19.175 17 20 17Zm-8.05-2 2.65-4h-3.25l-3.6 1.35 3 2.65Z"/>
    </Icon>
  );
});

IconMaterialTwoWheeler.displayName = 'AmauiIconMaterialTwoWheeler';

export default IconMaterialTwoWheeler;
