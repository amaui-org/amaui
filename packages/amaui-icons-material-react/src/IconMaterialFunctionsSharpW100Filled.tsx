import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFunctionsSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FunctionsSharpW100Filled'
      short_name='Functions'

      {...props}
    >
      <path d="M7 18.85V18.4L13.4 12L7 5.6V5.15H17V5.85H8.25L14.4 12L8.25 18.15H17V18.85Z"/>
    </Icon>
  );
});

export default IconMaterialFunctionsSharpW100Filled;
