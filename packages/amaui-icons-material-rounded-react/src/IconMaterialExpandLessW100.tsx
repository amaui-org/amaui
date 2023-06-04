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
      <path d="M7.15 14.25q-.125-.125-.125-.25t.125-.25l4.325-4.325q.125-.125.25-.175.125-.05.275-.05.15 0 .275.05.125.05.25.175l4.35 4.35q.1.1.1.225t-.125.25q-.125.125-.25.125t-.25-.125L12 9.9l-4.375 4.375q-.1.1-.225.1t-.25-.125Z"/>
    </Icon>
  );
});

IconMaterialExpandLessW100.displayName = 'AmauiIconMaterialExpandLessW100';

export default IconMaterialExpandLessW100;
