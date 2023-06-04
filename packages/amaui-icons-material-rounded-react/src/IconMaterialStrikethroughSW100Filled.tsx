import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStrikethroughSW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StrikethroughSW100Filled'

      short_name='StrikethroughS'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.15 19.2q-1.45 0-2.575-.7-1.125-.7-1.775-1.975-.05-.125 0-.275.05-.15.175-.2.125-.05.263 0 .137.05.212.175.55 1 1.45 1.638.9.637 2.25.637t2.55-.725q1.2-.725 1.2-2.275 0-.75-.187-1.225-.188-.475-.563-.925H16q.275.3.438.85.162.55.162 1.3 0 1.775-1.337 2.737-1.338.963-3.113.963ZM3 11.35q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h18q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm5-2.7q-.225-1.475.913-2.687Q10.05 4.75 12.05 4.75q1.15 0 1.975.425.825.425 1.475 1.3.1.125.062.275-.037.15-.187.225-.125.05-.25.012-.125-.037-.2-.137-.425-.575-1.15-.988-.725-.412-1.725-.412-1.7 0-2.625.975T8.7 8.65Z"/>
    </Icon>
  );
});

IconMaterialStrikethroughSW100Filled.displayName = 'AmauiIconMaterialStrikethroughSW100Filled';

export default IconMaterialStrikethroughSW100Filled;
