import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAvTimerW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AvTimerW100Filled'

      short_name='AvTimer'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 17.7q-.3 0-.5-.2t-.2-.5q0-.3.2-.5t.5-.2q.3 0 .5.2t.2.5q0 .3-.2.5t-.5.2Zm0 2q-1.6 0-3-.6t-2.45-1.65Q5.5 16.4 4.9 15q-.6-1.4-.6-3 0-1.85.75-3.35T7 6.1l5.9 5.9-.5.5L7 7.1q-.8.875-1.4 2.062Q5 10.35 5 12q0 2.9 2.05 4.95Q9.1 19 12 19q2.9 0 4.95-2.05Q19 14.9 19 12q0-2.6-1.775-4.663Q15.45 5.275 12.35 5v2h-.7V4.3H12q1.6 0 3 .6t2.45 1.65Q18.5 7.6 19.1 9q.6 1.4.6 3t-.6 3q-.6 1.4-1.65 2.45Q16.4 18.5 15 19.1q-1.4.6-3 .6Zm5-7q-.3 0-.5-.2t-.2-.5q0-.3.2-.5t.5-.2q.3 0 .5.2t.2.5q0 .3-.2.5t-.5.2Zm-10 0q-.3 0-.5-.2t-.2-.5q0-.3.2-.5t.5-.2q.3 0 .5.2t.2.5q0 .3-.2.5t-.5.2Z"/>
    </Icon>
  );
});

IconMaterialAvTimerW100Filled.displayName = 'AmauiIconMaterialAvTimerW100Filled';

export default IconMaterialAvTimerW100Filled;
