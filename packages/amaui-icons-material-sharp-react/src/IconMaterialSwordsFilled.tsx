import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSwordsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwordsFilled'

      short_name='Swords'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m19.05 21.6-2.925-2.9-2.2 2.2-.7-.7q-.575-.575-.575-1.425 0-.85.575-1.425l4.225-4.225q.575-.575 1.425-.575.85 0 1.425.575l.7.7-2.2 2.2 2.9 2.925q.3.3.3.7 0 .4-.3.7l-1.25 1.25q-.3.3-.7.3-.4 0-.7-.3ZM22 5.9 10.65 17.25l.125.1q.575.575.575 1.425 0 .85-.575 1.425l-.7.7-2.2-2.2-2.925 2.9q-.3.3-.7.3-.4 0-.7-.3L2.3 20.35q-.3-.3-.3-.7 0-.4.3-.7l2.9-2.925-2.2-2.2.7-.7q.575-.575 1.425-.575.85 0 1.425.575l.1.125L18 1.9h4ZM6.95 10.85 2 5.9v-4h4l4.95 4.95Z"/>
    </Icon>
  );
});

IconMaterialSwordsFilled.displayName = 'AmauiIconMaterialSwordsFilled';

export default IconMaterialSwordsFilled;
