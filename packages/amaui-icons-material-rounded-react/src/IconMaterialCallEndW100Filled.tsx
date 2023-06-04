import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCallEndW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CallEndW100Filled'

      short_name='CallEnd'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 8.65q2.75 0 5.525 1.137Q20.3 10.925 22.45 13.2q.075.125.075.275 0 .15-.075.225l-2.3 2.25q-.075.075-.2.1-.125.025-.25-.05l-3.05-2.3v-3.5q-1.2-.425-2.375-.638Q13.1 9.35 12 9.35q-1.1 0-2.275.212-1.175.213-2.375.638v3.5L4.3 16q-.075.075-.225.05-.15-.025-.225-.1l-2.3-2.25q-.125-.125-.1-.25.025-.125.1-.25 2.15-2.275 4.925-3.413Q9.25 8.65 12 8.65Z"/>
    </Icon>
  );
});

IconMaterialCallEndW100Filled.displayName = 'AmauiIconMaterialCallEndW100Filled';

export default IconMaterialCallEndW100Filled;
