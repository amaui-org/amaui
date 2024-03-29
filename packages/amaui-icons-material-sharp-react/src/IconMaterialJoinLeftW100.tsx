import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialJoinLeftW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='JoinLeftW100'

      short_name='JoinLeft'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.4 17.7q-2.375 0-4.037-1.662Q2.7 14.375 2.7 12t1.663-4.037Q6.025 6.3 8.4 6.3q.725 0 1.513.212.787.213 1.362.563-.925.575-1.5 1.937Q9.2 10.375 9.2 12t.575 2.988q.575 1.362 1.5 1.937-.575.35-1.362.562-.788.213-1.513.213Zm3.6-1.275q-.825 0-1.462-1.35Q9.9 13.725 9.9 12t.638-3.075q.637-1.35 1.462-1.35t1.463 1.35q.637 1.35.637 3.075t-.637 3.075q-.638 1.35-1.463 1.35Zm3.6 1.25q-.8 0-1.5-.187-.7-.188-1.35-.563.15-.1.3-.237.15-.138.275-.263.5.275 1.075.412.575.138 1.2.138 2.075 0 3.525-1.45 1.45-1.45 1.45-3.525t-1.45-3.525q-1.45-1.45-3.525-1.45-.625 0-1.2.137-.575.138-1.075.413-.125-.125-.275-.263-.15-.137-.3-.237.65-.375 1.35-.563.7-.187 1.5-.187 2.35 0 4.013 1.662Q21.275 9.65 21.275 12q0 2.35-1.662 4.012-1.663 1.663-4.013 1.663Z"/>
    </Icon>
  );
});

IconMaterialJoinLeftW100.displayName = 'AmauiIconMaterialJoinLeftW100';

export default IconMaterialJoinLeftW100;
