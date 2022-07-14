import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSortSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SortSharp'
      short_name='Sort'

      {...props}
    >
      <path d="M3 18V16H9V18ZM3 8V6H21V8ZM3 13V11H15V13Z"/>
    </Icon>
  );
});

export default IconMaterialSortSharp;
