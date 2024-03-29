import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCurtains = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Curtains'

      short_name='Curtains'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 21v-2h2V3h16v16h2v2Zm4-2h3.95q-.2-1.75-1.15-3.538-.95-1.787-2.8-2.312ZM6 5v5.85q1.85-.525 2.8-2.313Q9.75 6.75 9.95 5Zm2.225 7q1.7 1.125 2.625 3.075.925 1.95 1.1 3.925h.1q.175-1.975 1.1-3.925.925-1.95 2.625-3.075-1.7-1.125-2.625-3.075-.925-1.95-1.1-3.925h-.1q-.175 1.975-1.1 3.925-.925 1.95-2.625 3.075ZM18 5h-3.95q.2 1.75 1.15 3.537.95 1.788 2.8 2.313Zm0 14v-5.85q-1.85.525-2.787 2.312-.938 1.788-1.138 3.538ZM6 5v5.85Zm12 0v5.85V5Zm0 14v-5.85ZM6 19v-5.85V19Z"/>
    </Icon>
  );
});

IconMaterialCurtains.displayName = 'AmauiIconMaterialCurtains';

export default IconMaterialCurtains;
