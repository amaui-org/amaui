import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBreakfastDiningW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BreakfastDiningW100Filled'

      short_name='BreakfastDining'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.3 19.7v-10q-.8-.475-1.4-1.138Q3.3 7.9 3.3 7q0-1.125.788-1.913Q4.875 4.3 6 4.3h12q1.125 0 1.913.787.787.788.787 1.913 0 .9-.6 1.562-.6.663-1.4 1.138v10Zm6.7-3.05L15.7 13 12 9.3 8.35 13Zm0-1L9.35 13 12 10.3l2.7 2.7Z"/>
    </Icon>
  );
});

IconMaterialBreakfastDiningW100Filled.displayName = 'AmauiIconMaterialBreakfastDiningW100Filled';

export default IconMaterialBreakfastDiningW100Filled;
