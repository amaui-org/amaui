import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialReadMoreSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReadMoreSharp'
      short_name='ReadMore'

      {...props}
    >
      <path d="M7.45 17.45 6.05 16.05 9.075 13H2V11H9.075L6.05 7.95L7.45 6.55L12.9 12ZM13 9V7H22V9ZM13 17V15H22V17ZM16 13V11H22V13Z"/>
    </Icon>
  );
});

IconMaterialReadMoreSharp.displayName = 'AmauiIconMaterialReadMoreSharp';

export default IconMaterialReadMoreSharp;
