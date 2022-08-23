import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLastPageTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LastPageTwoTone'
      short_name='LastPage'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none" opacity=".87"/><path d="M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6-1.41 1.41zM16 6h2v12h-2V6z"/>
    </Icon>
  );
});

IconMaterialLastPageTwoTone.displayName = 'AmauiIconMaterialLastPageTwoTone';

export default IconMaterialLastPageTwoTone;
