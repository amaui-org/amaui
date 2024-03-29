import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSyncDisabled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SyncDisabled'

      short_name='SyncDisabled'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m19.8 22.6-3.725-3.725q-.475.275-.987.5-.513.225-1.088.375v-2.1q.15-.05.3-.112.15-.063.3-.138l-8-8q-.275.625-.438 1.288Q6 11.35 6 12.05q0 1.125.425 2.187Q6.85 15.3 7.75 16.2l.25.25V14h2v6H4v-2h2.75l-.4-.35q-1.225-1.225-1.788-2.662Q4 13.55 4 12.05q0-1.125.287-2.163.288-1.037.838-1.962L1.4 4.2l1.425-1.425 18.4 18.4Zm-.875-6.575-1.5-1.5q.275-.6.425-1.25.15-.65.15-1.325 0-1.125-.425-2.188Q17.15 8.7 16.25 7.8L16 7.55V10h-2V4h6v2h-2.75l.4.35q1.225 1.225 1.788 2.662Q20 10.45 20 11.95q0 1.125-.288 2.137-.287 1.013-.787 1.938Zm-9.45-9.45-1.5-1.5Q8.45 4.8 8.95 4.6q.5-.2 1.05-.35v2.1q-.125.05-.262.1-.138.05-.263.125Z"/>
    </Icon>
  );
});

IconMaterialSyncDisabled.displayName = 'AmauiIconMaterialSyncDisabled';

export default IconMaterialSyncDisabled;
