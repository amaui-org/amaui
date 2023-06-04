import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNavigateNextW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NavigateNextW100'

      short_name='NavigateNext'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.15 16.85q-.125-.125-.125-.25t.125-.25L13.5 12 9.15 7.65q-.125-.125-.125-.25t.125-.25q.125-.125.25-.125t.25.125l4.325 4.325q.125.125.175.25.05.125.05.275 0 .15-.05.275-.05.125-.175.25L9.65 16.85q-.125.125-.25.125t-.25-.125Z"/>
    </Icon>
  );
});

IconMaterialNavigateNextW100.displayName = 'AmauiIconMaterialNavigateNextW100';

export default IconMaterialNavigateNextW100;
