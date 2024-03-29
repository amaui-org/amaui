import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSync = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Sync'

      short_name='Sync'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 20v-2h2.75l-.4-.35q-1.3-1.15-1.825-2.625Q4 13.55 4 12.05q0-2.775 1.662-4.938Q7.325 4.95 10 4.25v2.1Q8.2 7 7.1 8.562 6 10.125 6 12.05q0 1.125.425 2.187Q6.85 15.3 7.75 16.2l.25.25V14h2v6Zm10-.25v-2.1q1.8-.65 2.9-2.212Q18 13.875 18 11.95q0-1.125-.425-2.188Q17.15 8.7 16.25 7.8L16 7.55V10h-2V4h6v2h-2.75l.4.35q1.225 1.225 1.788 2.662Q20 10.45 20 11.95q0 2.775-1.663 4.937Q16.675 19.05 14 19.75Z"/>
    </Icon>
  );
});

IconMaterialSync.displayName = 'AmauiIconMaterialSync';

export default IconMaterialSync;
