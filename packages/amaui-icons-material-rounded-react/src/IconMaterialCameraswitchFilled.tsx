import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCameraswitchFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CameraswitchFilled'

      short_name='Cameraswitch'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 17q-.825 0-1.412-.587Q6 15.825 6 15V9q0-.825.588-1.413Q7.175 7 8 7h1l1-1h4l1 1h1q.825 0 1.413.587Q18 8.175 18 9v6q0 .825-.587 1.413Q16.825 17 16 17Zm4-3q.825 0 1.413-.588Q14 12.825 14 12t-.587-1.413Q12.825 10 12 10q-.825 0-1.412.587Q10 11.175 10 12q0 .825.588 1.412Q11.175 14 12 14Zm10.85-3q-.35 0-.625-.25t-.35-.6q-.625-3.325-3.087-5.575-2.463-2.25-5.888-2.525l.85.85q.275.275.275.7 0 .425-.275.7-.275.275-.7.275-.425 0-.7-.275L9.975 1.925q-.6-.6-.437-1.175Q9.7.175 10.5.075q.375-.05.75-.063Q11.625 0 12 0q4.425 0 7.75 2.8t4.1 7.075q.075.45-.212.787-.288.338-.788.338ZM12 24q-4.425 0-7.75-2.8t-4.1-7.075q-.075-.45.213-.788Q.65 13 1.15 13q.35 0 .625.25t.35.6q.625 3.325 3.088 5.575 2.462 2.25 5.887 2.525l-.85-.85q-.275-.275-.275-.7 0-.425.275-.7.275-.275.7-.275.425 0 .7.275l2.375 2.375q.6.6.438 1.175-.163.575-.963.675-.375.05-.75.063Q12.375 24 12 24Z"/>
    </Icon>
  );
});

IconMaterialCameraswitchFilled.displayName = 'AmauiIconMaterialCameraswitchFilled';

export default IconMaterialCameraswitchFilled;
