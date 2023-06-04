import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialExpandLessFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExpandLessFilled'

      short_name='ExpandLess'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.7 14.675q-.275-.275-.275-.7 0-.425.275-.7l4.6-4.6q.15-.15.325-.213Q11.8 8.4 12 8.4t.375.062q.175.063.325.213l4.625 4.625q.275.275.275.675t-.3.7q-.275.275-.7.275-.425 0-.7-.275l-3.9-3.9L8.075 14.7q-.275.275-.675.275t-.7-.3Z"/>
    </Icon>
  );
});

IconMaterialExpandLessFilled.displayName = 'AmauiIconMaterialExpandLessFilled';

export default IconMaterialExpandLessFilled;
