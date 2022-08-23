import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialChevronRightSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChevronRightSharpW100Filled'
      short_name='ChevronRight'

      {...props}
    >
      <path d="M9.4 17.1 8.9 16.6 13.5 12 8.9 7.4 9.4 6.9 14.5 12Z"/>
    </Icon>
  );
});

IconMaterialChevronRightSharpW100Filled.displayName = 'AmauiIconMaterialChevronRightSharpW100Filled';

export default IconMaterialChevronRightSharpW100Filled;
