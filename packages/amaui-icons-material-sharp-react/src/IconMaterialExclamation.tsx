import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialExclamation = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Exclamation'

      short_name='Exclamation'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 14V5h2v9Zm0 5v-2h2v2Z"/>
    </Icon>
  );
});

IconMaterialExclamation.displayName = 'AmauiIconMaterialExclamation';

export default IconMaterialExclamation;
