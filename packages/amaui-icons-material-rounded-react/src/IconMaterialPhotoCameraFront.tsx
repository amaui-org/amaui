import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPhotoCameraFront = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhotoCameraFront'

      short_name='PhotoCameraFront'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 17h8v-.55q0-1.125-1.1-1.788Q13.8 14 12 14q-1.8 0-2.9.662Q8 15.325 8 16.45Zm4-4q.825 0 1.413-.588Q14 11.825 14 11t-.587-1.413Q12.825 9 12 9q-.825 0-1.412.587Q10 10.175 10 11q0 .825.588 1.412Q11.175 13 12 13Zm-8 8q-.825 0-1.412-.587Q2 19.825 2 19V7q0-.825.588-1.412Q3.175 5 4 5h3.15L8.4 3.65q.275-.325.662-.488Q9.45 3 9.875 3h4.25q.425 0 .813.162.387.163.662.488L16.85 5H20q.825 0 1.413.588Q22 6.175 22 7v12q0 .825-.587 1.413Q20.825 21 20 21Zm16-2V7H4v12ZM4 19V7v12Z"/>
    </Icon>
  );
});

IconMaterialPhotoCameraFront.displayName = 'AmauiIconMaterialPhotoCameraFront';

export default IconMaterialPhotoCameraFront;
