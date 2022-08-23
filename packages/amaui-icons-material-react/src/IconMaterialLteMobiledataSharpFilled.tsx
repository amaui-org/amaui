import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLteMobiledataSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LteMobiledataSharpFilled'
      short_name='LteMobiledata'

      {...props}
    >
      <path d="M4 16V8H6V14H9V16ZM11 16V10H9V8H15V10H13V16ZM16 16V8H21V10H18V11H21V13H18V14H21V16Z"/>
    </Icon>
  );
});

IconMaterialLteMobiledataSharpFilled.displayName = 'AmauiIconMaterialLteMobiledataSharpFilled';

export default IconMaterialLteMobiledataSharpFilled;
