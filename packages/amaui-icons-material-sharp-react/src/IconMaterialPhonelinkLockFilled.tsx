import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPhonelinkLockFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhonelinkLockFilled'

      short_name='PhonelinkLock'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15 16v-5h1v-1q0-.825.587-1.413Q17.175 8 18 8q.825 0 1.413.587Q20 9.175 20 10v1h1v5Zm2-5h2v-1q0-.425-.288-.713Q18.425 9 18 9t-.712.287Q17 9.575 17 10ZM5 23V1h14v6h-2V6H7v12h10v-1h2v6Z"/>
    </Icon>
  );
});

IconMaterialPhonelinkLockFilled.displayName = 'AmauiIconMaterialPhonelinkLockFilled';

export default IconMaterialPhonelinkLockFilled;
