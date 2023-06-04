import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialViewComfy = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewComfy'

      short_name='ViewComfy'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><path d="M10,18h10v-5H10V18z M4,6v5h16V6H4z M4,18h4v-5H4V18z" opacity=".3"/><path d="M2,4v16h20V4H2z M8,18H4v-5h4V18z M20,18H10v-5h10V18z M20,11H4V6h16V11z"/></g></g>
    </Icon>
  );
});

IconMaterialViewComfy.displayName = 'AmauiIconMaterialViewComfy';

export default IconMaterialViewComfy;
