import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTextRotateUpSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextRotateUpSharp'
      short_name='TextRotateUp'

      {...props}
    >
      <path d="M19 20H17V6.8L15.95 7.85L14.55 6.45L18 3L21.5 6.45L20.05 7.85L19 6.8ZM14 17.1 3 13V11L14 6.9V8.8L11.2 9.75V14.2L14 15.2ZM9.6 13.65V10.35L5.05 11.95V12.05Z"/>
    </Icon>
  );
});

IconMaterialTextRotateUpSharp.displayName = 'AmauiIconMaterialTextRotateUpSharp';

export default IconMaterialTextRotateUpSharp;
