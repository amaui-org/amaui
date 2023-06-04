import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChevronRightW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChevronRightW100Filled'

      short_name='ChevronRight'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m9.4 17.1-.5-.5 4.6-4.6-4.6-4.6.5-.5 5.1 5.1Z"/>
    </Icon>
  );
});

IconMaterialChevronRightW100Filled.displayName = 'AmauiIconMaterialChevronRightW100Filled';

export default IconMaterialChevronRightW100Filled;
