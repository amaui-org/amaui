import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVideoCameraFrontFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoCameraFrontFilled'

      short_name='VideoCameraFront'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 16h8v-.55q0-1.475-1.412-1.962Q11.175 13 10 13t-2.587.488Q6 13.975 6 15.45Zm4-4q.825 0 1.413-.588Q12 10.825 12 10t-.587-1.413Q10.825 8 10 8q-.825 0-1.412.587Q8 9.175 8 10q0 .825.588 1.412Q9.175 12 10 12Zm-6 8q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4h12q.825 0 1.413.588Q18 5.175 18 6v4.5l3.15-3.15q.225-.225.538-.113Q22 7.35 22 7.7v8.6q0 .35-.312.462-.313.113-.538-.112L18 13.5V18q0 .825-.587 1.413Q16.825 20 16 20Z"/>
    </Icon>
  );
});

IconMaterialVideoCameraFrontFilled.displayName = 'AmauiIconMaterialVideoCameraFrontFilled';

export default IconMaterialVideoCameraFrontFilled;
