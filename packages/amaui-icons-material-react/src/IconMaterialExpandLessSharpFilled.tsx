import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialExpandLessSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExpandLessSharpFilled'
      short_name='ExpandLess'

      {...props}
    >
      <path d="M7.4 15.375 6 13.975 12 7.975 18 13.975 16.6 15.375 12 10.775Z"/>
    </Icon>
  );
});

export default IconMaterialExpandLessSharpFilled;
