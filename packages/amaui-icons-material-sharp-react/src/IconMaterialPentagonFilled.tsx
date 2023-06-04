import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPentagonFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PentagonFilled'

      short_name='Pentagon'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 21 2 9l10-7 10 7-4 12Z"/>
    </Icon>
  );
});

IconMaterialPentagonFilled.displayName = 'AmauiIconMaterialPentagonFilled';

export default IconMaterialPentagonFilled;
