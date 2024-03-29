import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCookieW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CookieW100Filled'

      short_name='Cookie'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.5 9.75q.525 0 .887-.375.363-.375.363-.875 0-.525-.363-.888-.362-.362-.887-.362-.5 0-.875.362-.375.363-.375.888 0 .5.375.875t.875.375Zm-2 5q.525 0 .887-.375.363-.375.363-.875 0-.525-.363-.887-.362-.363-.887-.363-.5 0-.875.363-.375.362-.375.887 0 .5.375.875t.875.375Zm6.5 1q.325 0 .538-.225.212-.225.212-.525 0-.325-.212-.538-.213-.212-.538-.212-.3 0-.525.212-.225.213-.225.538 0 .3.225.525.225.225.525.225Zm-3 5.6q-1.95 0-3.65-.737-1.7-.738-2.962-2-1.263-1.263-2-2.963-.738-1.7-.738-3.65 0-2.125.888-3.963Q4.425 6.2 5.9 4.912q1.475-1.287 3.412-1.9 1.938-.612 4.038-.287-.025 1.125.313 2.012.337.888.987 1.525.65.638 1.588.975.937.338 2.137.388-.2 1.475.75 2.6t2.225 1.35q0 2-.737 3.775-.738 1.775-2.013 3.112-1.275 1.338-2.975 2.113-1.7.775-3.625.775Z"/>
    </Icon>
  );
});

IconMaterialCookieW100Filled.displayName = 'AmauiIconMaterialCookieW100Filled';

export default IconMaterialCookieW100Filled;
