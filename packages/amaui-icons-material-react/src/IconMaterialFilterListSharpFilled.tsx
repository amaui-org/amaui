import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFilterListSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterListSharpFilled'
      short_name='FilterList'

      {...props}
    >
      <path d="M10 18V16H14V18ZM3 8V6H21V8ZM6 13V11H18V13Z"/>
    </Icon>
  );
});

IconMaterialFilterListSharpFilled.displayName = 'AmauiIconMaterialFilterListSharpFilled';

export default IconMaterialFilterListSharpFilled;
