import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLooks3SharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Looks3SharpFilled'
      short_name='Looks3'

      {...props}
    >
      <path d="M9 17H15V7H9V9H13V11H11V13H13V15H9ZM3 21V3H21V21Z"/>
    </Icon>
  );
});

IconMaterialLooks3SharpFilled.displayName = 'AmauiIconMaterialLooks3SharpFilled';

export default IconMaterialLooks3SharpFilled;
