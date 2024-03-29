import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNotificationAdd = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NotificationAdd'

      short_name='NotificationAdd'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 19q-.425 0-.713-.288Q4 18.425 4 18t.287-.712Q4.575 17 5 17h1v-7q0-2.125 1.275-3.713Q8.55 4.7 10.5 4.2v-.7q0-.625.438-1.062Q11.375 2 12 2t1.062.438q.438.437.438 1.062v.7q.625.15 1.175.425T15.7 5.3l-.712.712-.713.713q-.475-.35-1.05-.537Q12.65 6 12 6q-1.65 0-2.825 1.175Q8 8.35 8 10v7h8v-3h2v3h1q.425 0 .712.288.288.287.288.712t-.288.712Q19.425 19 19 19Zm7 3q-.825 0-1.412-.587Q10 20.825 10 20h4q0 .825-.587 1.413Q12.825 22 12 22Zm8-9q-.425 0-.712-.288Q19 12.425 19 12v-2h-2q-.425 0-.712-.288Q16 9.425 16 9t.288-.713Q16.575 8 17 8h2V6q0-.425.288-.713Q19.575 5 20 5t.712.287Q21 5.575 21 6v2h2q.425 0 .712.287Q24 8.575 24 9t-.288.712Q23.425 10 23 10h-2v2q0 .425-.288.712Q20.425 13 20 13Zm-8-1.5Z"/>
    </Icon>
  );
});

IconMaterialNotificationAdd.displayName = 'AmauiIconMaterialNotificationAdd';

export default IconMaterialNotificationAdd;
