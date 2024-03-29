import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNoPhotography = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoPhotography'

      short_name='NoPhotography'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m22 19.125-2-2V7H9.875L7.5 4.625 9 3h6l1.85 2H22ZM11.1 13.9Zm3.35-2.325ZM5.025 5l2 2H4v12h12.175l-2.025-2.025q-.475.275-1.025.4-.55.125-1.125.125-1.875 0-3.188-1.312Q7.5 14.875 7.5 13q0-.575.125-1.125t.4-1.025L.675 3.5 2.1 2.075l19.8 19.8-1.425 1.425-2.3-2.3H2V5Zm11.45 8.6L11.4 8.525q1.05-.125 2.05.2 1 .325 1.75 1.075t1.075 1.75q.325 1 .2 2.05Z"/>
    </Icon>
  );
});

IconMaterialNoPhotography.displayName = 'AmauiIconMaterialNoPhotography';

export default IconMaterialNoPhotography;
