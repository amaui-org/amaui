import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChevronForwardW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChevronForwardW100Filled'

      short_name='ChevronForward'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M540-480 356-664l20-20 204 204-204 204-20-20 184-184Z"/>
    </Icon>
  );
});

IconMaterialChevronForwardW100Filled.displayName = 'AmauiIconMaterialChevronForwardW100Filled';

export default IconMaterialChevronForwardW100Filled;
