import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDoneAllTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoneAllTwoTone'
      short_name='DoneAll'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M18 7l-1.41-1.41-6.34 6.34 1.41 1.41L18 7zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41L11.66 19l12-12-1.42-1.41zM.41 13.41L6 19l1.41-1.41L1.83 12 .41 13.41z"/>
    </Icon>
  );
});

IconMaterialDoneAllTwoTone.displayName = 'AmauiIconMaterialDoneAllTwoTone';

export default IconMaterialDoneAllTwoTone;
