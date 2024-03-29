import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSwords = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Swords'

      short_name='Swords'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m19.05 21.6-2.925-2.9-2.2 2.2-.7-.7q-.575-.575-.575-1.425 0-.85.575-1.425l4.225-4.225q.575-.575 1.425-.575.85 0 1.425.575l.7.7-2.2 2.2 2.9 2.925q.3.3.3.7 0 .4-.3.7l-1.25 1.25q-.3.3-.7.3-.4 0-.7-.3ZM22 5.9 10.65 17.25l.125.1q.575.575.575 1.425 0 .85-.575 1.425l-.7.7-2.2-2.2-2.925 2.9q-.3.3-.7.3-.4 0-.7-.3L2.3 20.35q-.3-.3-.3-.7 0-.4.3-.7l2.9-2.925-2.2-2.2.7-.7q.575-.575 1.425-.575.85 0 1.425.575l.1.125L18 1.9h4ZM8.35 9.425l.6-.575.575-.6-.575.6Zm-1.4 1.425L2 5.9v-4h4l4.95 4.95-1.425 1.4-4.35-4.35H4v1.175l4.35 4.35Zm2.3 4.975L20 5.075V3.9h-1.175L8.075 14.65Zm0 0-.6-.575-.575-.6.575.6.6.575Z"/>
    </Icon>
  );
});

IconMaterialSwords.displayName = 'AmauiIconMaterialSwords';

export default IconMaterialSwords;
