import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNotificationAddFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NotificationAddFilled'

      short_name='NotificationAdd'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 22q-.825 0-1.412-.587Q10 20.825 10 20h4q0 .825-.587 1.413Q12.825 22 12 22Zm8-9q-.425 0-.712-.288Q19 12.425 19 12v-2h-2q-.425 0-.712-.288Q16 9.425 16 9t.288-.713Q16.575 8 17 8h2V6q0-.425.288-.713Q19.575 5 20 5t.712.287Q21 5.575 21 6v2h2q.425 0 .712.287Q24 8.575 24 9t-.288.712Q23.425 10 23 10h-2v2q0 .425-.288.712Q20.425 13 20 13ZM5 19q-.425 0-.713-.288Q4 18.425 4 18t.287-.712Q4.575 17 5 17h1v-7q0-2.125 1.275-3.713Q8.55 4.7 10.5 4.2v-.7q0-.625.438-1.062Q11.375 2 12 2t1.062.438q.438.437.438 1.062v.7q.475.1.913.287.437.188.787.438-.725.875-1.087 1.9Q13.75 7.85 13.75 9q0 2.125 1.162 3.738Q16.075 14.35 18 15.1V17h1q.425 0 .712.288.288.287.288.712t-.288.712Q19.425 19 19 19Z"/>
    </Icon>
  );
});

IconMaterialNotificationAddFilled.displayName = 'AmauiIconMaterialNotificationAddFilled';

export default IconMaterialNotificationAddFilled;
