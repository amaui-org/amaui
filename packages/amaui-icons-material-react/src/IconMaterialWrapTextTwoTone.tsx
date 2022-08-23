import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWrapTextTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WrapTextTwoTone'
      short_name='WrapText'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M4 17h6v2H4zm13-6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3 3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4zM4 5h16v2H4z"/>
    </Icon>
  );
});

IconMaterialWrapTextTwoTone.displayName = 'AmauiIconMaterialWrapTextTwoTone';

export default IconMaterialWrapTextTwoTone;
