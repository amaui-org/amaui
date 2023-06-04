import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSignpostW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignpostW100Filled'

      short_name='Signpost'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 20.7q-.15 0-.25-.1t-.1-.25V16.7h-4.9q-.225 0-.425-.075-.2-.075-.375-.25l-1.2-1.2q-.175-.175-.262-.4-.088-.225-.088-.425 0-.225.088-.438.087-.212.262-.387l1.2-1.2q.175-.175.375-.25.2-.075.425-.075h4.9v-2H5.8q-.475 0-.812-.338-.338-.337-.338-.812v-2.4q0-.475.338-.813.337-.337.812-.337h5.85V3.65q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25V5.3h4.9q.225 0 .425.075.2.075.375.25l1.2 1.2q.175.175.263.388.087.212.087.437t-.087.437q-.088.213-.263.388l-1.2 1.2q-.175.175-.375.25-.2.075-.425.075h-4.9v2h5.85q.475 0 .813.337.337.338.337.813v2.4q0 .475-.337.812-.338.338-.813.338h-5.85v3.65q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialSignpostW100Filled.displayName = 'AmauiIconMaterialSignpostW100Filled';

export default IconMaterialSignpostW100Filled;
