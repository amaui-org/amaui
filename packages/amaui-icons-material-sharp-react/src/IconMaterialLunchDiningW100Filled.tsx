import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLunchDiningW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LunchDiningW100Filled'

      short_name='LunchDining'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.3 10v-.5q0-2.2 1.9-3.45T12 4.8q4.9 0 6.8 1.25 1.9 1.25 1.9 3.45v.5Zm0 3.85v-.7q.875 0 1.338-.5.462-.5 1.562-.5t1.563.5q.462.5 1.337.5t1.338-.5q.462-.5 1.562-.5t1.562.5q.463.5 1.338.5t1.313-.5q.437-.5 1.537-.5 1.1 0 1.588.5.487.5 1.362.5v.7q-1.1 0-1.537-.5-.438-.5-1.313-.5t-1.362.5q-.488.5-1.588.5t-1.562-.5q-.463-.5-1.338-.5t-1.337.5q-.463.5-1.563.5-1.1 0-1.563-.5-.462-.5-1.337-.5t-1.337.5q-.463.5-1.563.5Zm0 5.85V16h17.4v3.7Z"/>
    </Icon>
  );
});

IconMaterialLunchDiningW100Filled.displayName = 'AmauiIconMaterialLunchDiningW100Filled';

export default IconMaterialLunchDiningW100Filled;
