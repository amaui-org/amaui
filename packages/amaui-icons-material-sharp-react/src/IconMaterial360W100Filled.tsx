import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial360W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='360W100Filled'

      short_name='360'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m8.4 18.35-.5-.5 2.25-2.25q-2.825-.375-4.838-1.362Q3.3 13.25 3.3 12q0-1.475 2.538-2.588Q8.375 8.3 12 8.3t6.163 1.112Q20.7 10.525 20.7 12q0 .95-1.275 1.85-1.275.9-3.425 1.4v-.7q1.925-.5 2.962-1.238Q20 12.575 20 12q0-.875-2.137-1.938Q15.725 9 12 9q-3.725 0-5.862 1.062Q4 11.125 4 12q0 .75 1.775 1.65 1.775.9 4.375 1.25L7.9 12.65l.5-.5 3.1 3.1Z"/>
    </Icon>
  );
});

IconMaterial360W100Filled.displayName = 'AmauiIconMaterial360W100Filled';

export default IconMaterial360W100Filled;
