import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChromeToteFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChromeToteFilled'

      short_name='ChromeTote'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m581 636 160-160-56-57-64 63V316h-80v166l-64-63-56 57 160 160ZM150 981 76 384l125-14v486h538v51l-589 74Zm131-205V176h600v600H281Z"/>
    </Icon>
  );
});

IconMaterialChromeToteFilled.displayName = 'AmauiIconMaterialChromeToteFilled';

export default IconMaterialChromeToteFilled;
