import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLooksOneFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LooksOneFilled'

      short_name='LooksOne'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 17h2V7h-4v2h2Zm9 4H3V3h18Z"/>
    </Icon>
  );
});

IconMaterialLooksOneFilled.displayName = 'AmauiIconMaterialLooksOneFilled';

export default IconMaterialLooksOneFilled;
