import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSkipPreviousSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SkipPreviousSharpW100Filled'
      short_name='SkipPrevious'

      {...props}
    >
      <path d="M7.1 16.2V7.8H7.8V16.2ZM16.9 16.2 10.6 12 16.9 7.8Z"/>
    </Icon>
  );
});

IconMaterialSkipPreviousSharpW100Filled.displayName = 'AmauiIconMaterialSkipPreviousSharpW100Filled';

export default IconMaterialSkipPreviousSharpW100Filled;
