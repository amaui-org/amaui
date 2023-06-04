import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialViewCompactAlt = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewCompactAlt'

      short_name='ViewCompactAlt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.5 11.5h4v-4h-4Zm5 0h4v-4h-4Zm-5 5h4v-4h-4Zm5 0h4v-4h-4ZM2 20V4h20v16Zm2-2h16V6H4ZM4 6v12Z"/>
    </Icon>
  );
});

IconMaterialViewCompactAlt.displayName = 'AmauiIconMaterialViewCompactAlt';

export default IconMaterialViewCompactAlt;
