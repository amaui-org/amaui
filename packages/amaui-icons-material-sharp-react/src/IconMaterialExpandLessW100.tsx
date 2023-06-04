import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialExpandLessW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExpandLessW100'

      short_name='ExpandLess'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m7.4 14.5-.5-.5L12 8.9l5.1 5.1-.5.5L12 9.9Z"/>
    </Icon>
  );
});

IconMaterialExpandLessW100.displayName = 'AmauiIconMaterialExpandLessW100';

export default IconMaterialExpandLessW100;
