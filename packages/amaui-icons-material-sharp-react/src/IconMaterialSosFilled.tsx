import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSosFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SosFilled'

      short_name='Sos'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.5 17V7h7v10ZM1 17v-2h4v-2H1V7h6v2H3v2h4v6Zm16 0v-2h4v-2h-4V7h6v2h-4v2h4v6Zm-6.5-2h3V9h-3Z"/>
    </Icon>
  );
});

IconMaterialSosFilled.displayName = 'AmauiIconMaterialSosFilled';

export default IconMaterialSosFilled;
