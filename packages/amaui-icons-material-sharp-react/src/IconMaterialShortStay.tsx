import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShortStay = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShortStay'

      short_name='ShortStay'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 20h3.675H5h2Zm-4 2V2h13v8.075q-.55.075-1.05.237-.5.163-.95.363V4H5v6.525q.45-.275.95-.4Q6.45 10 7 10h5q.575 0 1.113.162.537.163 1.037.438-.575.275-1.1.625-.525.35-.95.8-.025 0-.05-.013Q12.025 12 12 12H7q-.825 0-1.412.587Q5 13.175 5 14v6h5.675q.275.575.625 1.075t.8.925ZM9.5 9q-.825 0-1.412-.588Q7.5 7.825 7.5 7t.588-1.412Q8.675 5 9.5 5t1.413.588Q11.5 6.175 11.5 7t-.587 1.412Q10.325 9 9.5 9Zm-1 10h1.775q-.125-.475-.2-.975Q10 17.525 10 17q0-.675.125-1.325.125-.65.375-1.275V13h-2v2h-2v2h2Zm8.5 3q-2.075 0-3.537-1.462Q12 19.075 12 17q0-2.075 1.463-3.538Q14.925 12 17 12t3.538 1.462Q22 14.925 22 17q0 2.075-1.462 3.538Q19.075 22 17 22Zm1.675-2.625.7-.7L17.5 16.8V14h-1v3.2Z"/>
    </Icon>
  );
});

IconMaterialShortStay.displayName = 'AmauiIconMaterialShortStay';

export default IconMaterialShortStay;
