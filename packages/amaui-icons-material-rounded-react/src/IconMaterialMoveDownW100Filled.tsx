import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMoveDownW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoveDownW100Filled'

      short_name='MoveDown'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.775 19.825q-.125-.125-.125-.25t.125-.25l1.95-1.95q-2.9 0-4.987-1.775Q1.65 13.825 1.65 11q0-2.65 1.85-4.5T8 4.65h2q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1H8Q5.65 5.35 4 7t-1.65 4q0 2.475 1.775 4.038Q5.9 16.6 8.775 16.675l-2-2q-.125-.125-.125-.25t.125-.25q.125-.1.25-.113.125-.012.25.113l2.3 2.3q.125.125.175.25.05.125.05.275 0 .15-.05.275-.05.125-.175.25l-2.3 2.3q-.125.125-.25.125t-.25-.125Zm7.575-9.475q-.275 0-.487-.213-.213-.212-.213-.487v-4.3q0-.275.213-.488.212-.212.487-.212h6.3q.275 0 .488.212.212.213.212.488v4.3q0 .275-.212.487-.213.213-.488.213Zm0-.7h6.3v-4.3h-6.3Zm0 9.7q-.275 0-.487-.212-.213-.213-.213-.488v-4.3q0-.275.213-.488.212-.212.487-.212h6.3q.275 0 .488.212.212.213.212.488v4.3q0 .275-.212.488-.213.212-.488.212Z"/>
    </Icon>
  );
});

IconMaterialMoveDownW100Filled.displayName = 'AmauiIconMaterialMoveDownW100Filled';

export default IconMaterialMoveDownW100Filled;
