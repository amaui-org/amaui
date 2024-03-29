import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPhoneLockedFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhoneLockedFilled'

      short_name='PhoneLocked'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16 10q-.425 0-.712-.288Q15 9.425 15 9V6q0-.425.288-.713Q15.575 5 16 5V4q0-.825.587-1.413Q17.175 2 18 2q.825 0 1.413.587Q20 3.175 20 4v1q.425 0 .712.287Q21 5.575 21 6v3q0 .425-.288.712Q20.425 10 20 10Zm1-5h2V4q0-.425-.288-.713Q18.425 3 18 3t-.712.287Q17 3.575 17 4Zm2.95 16q-3.225 0-6.287-1.438-3.063-1.437-5.425-3.8-2.363-2.362-3.8-5.425Q3 7.275 3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.225t.325.575l.65 3.5q.05.35-.012.637-.063.288-.288.513L7 10.9q1.05 1.8 2.625 3.375T13.1 17l2.35-2.35q.225-.225.588-.338.362-.112.712-.062l3.45.7q.35.075.575.337.225.263.225.613v4.05q0 .45-.3.75t-.75.3Z"/>
    </Icon>
  );
});

IconMaterialPhoneLockedFilled.displayName = 'AmauiIconMaterialPhoneLockedFilled';

export default IconMaterialPhoneLockedFilled;
