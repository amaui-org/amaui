import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialViewCompactFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewCompactFilled'

      short_name='ViewCompact'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.25 8.75v-4.5h4.25v4.5Zm5.25 0v-4.5h4.25v4.5Zm5.25 0v-4.5H22v4.5ZM2 8.75v-4.5h4.25v4.5Zm10.5 5.5v-4.5h4.25v4.5Zm5.25 0v-4.5H22v4.5ZM2 14.25v-4.5h4.25v4.5Zm10.5 5.5v-4.5h4.25v4.5Zm-5.25 0v-4.5h4.25v4.5Zm10.5 0v-4.5H22v4.5ZM2 19.75v-4.5h4.25v4.5Zm5.25-5.5v-4.5h4.25v4.5Z"/>
    </Icon>
  );
});

IconMaterialViewCompactFilled.displayName = 'AmauiIconMaterialViewCompactFilled';

export default IconMaterialViewCompactFilled;
