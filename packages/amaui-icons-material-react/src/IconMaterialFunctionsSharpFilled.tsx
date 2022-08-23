import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFunctionsSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FunctionsSharpFilled'
      short_name='Functions'

      {...props}
    >
      <path d="M6 20V18L12.5 12L6 6V4H18V7H10.775L16.15 12L10.775 17H18V20Z"/>
    </Icon>
  );
});

IconMaterialFunctionsSharpFilled.displayName = 'AmauiIconMaterialFunctionsSharpFilled';

export default IconMaterialFunctionsSharpFilled;
