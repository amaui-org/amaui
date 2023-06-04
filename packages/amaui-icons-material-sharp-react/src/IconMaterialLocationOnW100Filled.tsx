import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLocationOnW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocationOnW100Filled'

      short_name='LocationOn'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 11.35q.575 0 .963-.388.387-.387.387-.962t-.387-.963Q12.575 8.65 12 8.65t-.962.387q-.388.388-.388.963t.388.962q.387.388.962.388Zm0 10.15q-3.725-3.35-5.537-6.213Q4.65 12.425 4.65 10.2q0-3.45 2.225-5.5T12 2.65q2.9 0 5.125 2.05t2.225 5.5q0 2.225-1.812 5.087Q15.725 18.15 12 21.5Z"/>
    </Icon>
  );
});

IconMaterialLocationOnW100Filled.displayName = 'AmauiIconMaterialLocationOnW100Filled';

export default IconMaterialLocationOnW100Filled;
