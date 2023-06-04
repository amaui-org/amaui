import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFmdBadW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FmdBadW100Filled'

      short_name='FmdBad'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.65 12.525h.7v-5.9h-.7Zm.35 2.65q.225 0 .363-.15.137-.15.137-.35 0-.225-.137-.363-.138-.137-.363-.137-.2 0-.35.137-.15.138-.15.363 0 .2.15.35.15.15.35.15Zm0 6.325q-3.725-3.35-5.537-6.213Q4.65 12.425 4.65 10.2q0-3.45 2.225-5.5T12 2.65q2.9 0 5.125 2.05t2.225 5.5q0 2.225-1.812 5.087Q15.725 18.15 12 21.5Z"/>
    </Icon>
  );
});

IconMaterialFmdBadW100Filled.displayName = 'AmauiIconMaterialFmdBadW100Filled';

export default IconMaterialFmdBadW100Filled;
