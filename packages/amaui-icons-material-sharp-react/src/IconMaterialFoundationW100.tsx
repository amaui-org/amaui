import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFoundationW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FoundationW100'

      short_name='Foundation'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.3 18.7v-3h-.9V15h.9v-4.3h-.9L12 4.75l6.6 5.95h-.9V15h.9v.7h-.9v3H17v-3h-4.65v3h-.7v-3H7v3ZM7 15h4.65V6.025L7 10.2Zm5.35 0H17v-4.8l-4.65-4.175Z"/>
    </Icon>
  );
});

IconMaterialFoundationW100.displayName = 'AmauiIconMaterialFoundationW100';

export default IconMaterialFoundationW100;
