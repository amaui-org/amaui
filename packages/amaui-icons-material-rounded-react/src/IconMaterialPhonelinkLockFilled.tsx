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
      <path d="M15.85 16q-.35 0-.6-.25t-.25-.6v-3.3q0-.35.25-.6t.6-.25H16v-1q0-.825.587-1.413Q17.175 8 18 8q.825 0 1.413.587Q20 9.175 20 10v1h.15q.35 0 .6.25t.25.6v3.3q0 .35-.25.6t-.6.25ZM17 11h2v-1q0-.425-.288-.713Q18.425 9 18 9t-.712.287Q17 9.575 17 10ZM7 23q-.825 0-1.412-.587Q5 21.825 5 21V3q0-.825.588-1.413Q6.175 1 7 1h10q.825 0 1.413.587Q19 2.175 19 3v4h-2V6H7v12h10v-1h2v4q0 .825-.587 1.413Q17.825 23 17 23Z"/>
    </Icon>
  );
});

IconMaterialPhonelinkLockFilled.displayName = 'AmauiIconMaterialPhonelinkLockFilled';

export default IconMaterialPhonelinkLockFilled;
