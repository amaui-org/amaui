import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMmsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MmsFilled'

      short_name='Mms'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 14h10q.3 0 .45-.275.15-.275-.05-.525l-2.75-3.675q-.15-.2-.4-.2t-.4.2L11.25 13 9.4 10.525q-.15-.2-.4-.2t-.4.2l-2 2.675q-.2.25-.05.525Q6.7 14 7 14Zm-5 5.575V4q0-.825.588-1.413Q3.175 2 4 2h16q.825 0 1.413.587Q22 3.175 22 4v12q0 .825-.587 1.413Q20.825 18 20 18H6l-2.3 2.3q-.475.475-1.088.212Q2 20.25 2 19.575Z"/>
    </Icon>
  );
});

IconMaterialMmsFilled.displayName = 'AmauiIconMaterialMmsFilled';

export default IconMaterialMmsFilled;
