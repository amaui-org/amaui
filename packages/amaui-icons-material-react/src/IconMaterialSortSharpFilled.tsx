import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSortSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SortSharpFilled'
      short_name='Sort'

      {...props}
    >
      <path d="M3 18V16H9V18ZM3 8V6H21V8ZM3 13V11H15V13Z"/>
    </Icon>
  );
});

IconMaterialSortSharpFilled.displayName = 'AmauiIconMaterialSortSharpFilled';

export default IconMaterialSortSharpFilled;
