import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRouter = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Router'

      short_name='Router'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 21v-8h12V9h2v4h4v8Zm2-2h14v-4H5Zm3-1v-2H6v2Zm1.5 0h2v-2h-2Zm3.5 0h2v-2h-2Zm1.25-9.75L12.8 6.8q.65-.6 1.45-.95.8-.35 1.75-.35t1.75.35q.8.35 1.45.95l-1.45 1.45q-.35-.35-.787-.55-.438-.2-.963-.2-.525 0-.962.2-.438.2-.788.55Zm-2.5-2.5-1.4-1.4q1.1-1.1 2.55-1.725Q14.35 2 16 2q1.65 0 3.1.625 1.45.625 2.55 1.725l-1.4 1.4q-.825-.825-1.913-1.287Q17.25 4 16 4q-1.25 0-2.337.463-1.088.462-1.913 1.287ZM5 19v-4 4Z"/>
    </Icon>
  );
});

IconMaterialRouter.displayName = 'AmauiIconMaterialRouter';

export default IconMaterialRouter;
