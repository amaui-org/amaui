import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBreakfastDiningW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BreakfastDiningW100'

      short_name='BreakfastDining'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.3 19.7v-10q-.8-.475-1.4-1.138Q3.3 7.9 3.3 7q0-1.125.788-1.913Q4.875 4.3 6 4.3h12q1.125 0 1.913.787.787.788.787 1.913 0 .9-.6 1.562-.6.663-1.4 1.138v10ZM6 19h12V9.3l.4-.25q.6-.375 1.1-.862Q20 7.7 20 7q0-.825-.587-1.412Q18.825 5 18 5H6q-.825 0-1.412.588Q4 6.175 4 7q0 .7.5 1.188.5.487 1.1.862l.4.25Zm6-2.35L15.7 13 12 9.3 8.35 13Zm0-1L9.35 13 12 10.3l2.7 2.7ZM12 12Z"/>
    </Icon>
  );
});

IconMaterialBreakfastDiningW100.displayName = 'AmauiIconMaterialBreakfastDiningW100';

export default IconMaterialBreakfastDiningW100;
