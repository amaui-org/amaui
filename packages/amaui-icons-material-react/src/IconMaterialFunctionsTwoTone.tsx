import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFunctionsTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FunctionsTwoTone'
      short_name='Functions'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M18 17h-7l5-5-5-5h7V4H6v2l6.5 6L6 18v2h12z"/>
    </Icon>
  );
});

IconMaterialFunctionsTwoTone.displayName = 'AmauiIconMaterialFunctionsTwoTone';

export default IconMaterialFunctionsTwoTone;
