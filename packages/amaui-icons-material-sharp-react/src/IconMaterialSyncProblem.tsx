import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSyncProblem = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SyncProblem'

      short_name='SyncProblem'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 13V7h2v6Zm1 4q-.425 0-.712-.288Q11 16.425 11 16t.288-.713Q11.575 15 12 15t.713.287Q13 15.575 13 16t-.287.712Q12.425 17 12 17Zm3-13h6v2h-2.75l.4.35q1.225 1.225 1.788 2.662Q21 10.45 21 11.95q0 2.775-1.663 4.937Q17.675 19.05 15 19.75v-2.1q1.8-.65 2.9-2.212Q19 13.875 19 11.95q0-1.125-.425-2.188Q18.15 8.7 17.25 7.8L17 7.55V10h-2ZM9 20H3v-2h2.75l-.4-.35q-1.3-1.15-1.825-2.625Q3 13.55 3 12.05q0-2.775 1.662-4.938Q6.325 4.95 9 4.25v2.1Q7.2 7 6.1 8.562 5 10.125 5 12.05q0 1.125.425 2.187Q5.85 15.3 6.75 16.2l.25.25V14h2Z"/>
    </Icon>
  );
});

IconMaterialSyncProblem.displayName = 'AmauiIconMaterialSyncProblem';

export default IconMaterialSyncProblem;
