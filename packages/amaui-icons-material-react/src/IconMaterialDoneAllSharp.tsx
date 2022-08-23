import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDoneAllSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoneAllSharp'
      short_name='DoneAll'

      {...props}
    >
      <path d="M6.7 18 1.05 12.35 2.475 10.95 6.725 15.2 8.125 16.6ZM12.35 18 6.7 12.35 8.1 10.925 12.35 15.175 21.55 5.975 22.95 7.4ZM12.35 12.35 10.925 10.95 15.875 6 17.3 7.4Z"/>
    </Icon>
  );
});

IconMaterialDoneAllSharp.displayName = 'AmauiIconMaterialDoneAllSharp';

export default IconMaterialDoneAllSharp;
