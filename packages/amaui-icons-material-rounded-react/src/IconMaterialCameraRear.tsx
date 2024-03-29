import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCameraRear = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CameraRear'

      short_name='CameraRear'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 10q.825 0 1.413-.588Q14 8.825 14 8t-.587-1.412Q12.825 6 12 6q-.825 0-1.412.588Q10 7.175 10 8t.588 1.412Q11.175 10 12 10ZM6 20q-.425 0-.713-.288Q5 19.425 5 19t.287-.712Q5.575 18 6 18h3.55l-.4-.4q-.275-.275-.275-.7 0-.425.275-.7.275-.275.7-.275.425 0 .7.275l2.1 2.1q.3.3.3.7 0 .4-.3.7l-2.1 2.1q-.275.275-.7.275-.425 0-.7-.275-.275-.275-.275-.7 0-.425.275-.7l.4-.4ZM5 4q0-.825.588-1.413Q6.175 2 7 2h10q.825 0 1.413.587Q19 3.175 19 4v13h-2V4H7v12.925L6.925 17H5Zm10 16q-.425 0-.712-.288Q14 19.425 14 19t.288-.712Q14.575 18 15 18h3q.425 0 .712.288.288.287.288.712t-.288.712Q18.425 20 18 20ZM12.775 4H7h10Z"/>
    </Icon>
  );
});

IconMaterialCameraRear.displayName = 'AmauiIconMaterialCameraRear';

export default IconMaterialCameraRear;
