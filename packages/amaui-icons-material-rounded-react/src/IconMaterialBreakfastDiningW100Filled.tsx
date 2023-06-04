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
      <path d="M6 19.7q-.275 0-.487-.213Q5.3 19.275 5.3 19V9.7q-.8-.475-1.4-1.138Q3.3 7.9 3.3 7q0-1.125.788-1.913Q4.875 4.3 6 4.3h12q1.125 0 1.913.787.787.788.787 1.913 0 .9-.6 1.562-.6.663-1.4 1.138V19q0 .275-.212.487-.213.213-.488.213Zm5.7-3.35q.125.125.3.125t.3-.125l3.1-3.05q.125-.125.125-.3t-.125-.3l-3.1-3.1q-.125-.125-.3-.125t-.3.125l-3.05 3.1q-.125.125-.125.3t.125.3Zm.3-.7L9.35 13 12 10.3l2.7 2.7Z"/>
    </Icon>
  );
});

IconMaterialBreakfastDiningW100Filled.displayName = 'AmauiIconMaterialBreakfastDiningW100Filled';

export default IconMaterialBreakfastDiningW100Filled;
