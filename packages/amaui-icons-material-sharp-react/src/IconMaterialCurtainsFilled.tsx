import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCurtainsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CurtainsFilled'

      short_name='Curtains'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 21v-2h2V3h16v16h2v2Zm6.225-9q1.7 1.125 2.625 3.075.925 1.95 1.1 3.925h.1q.175-1.975 1.1-3.925.925-1.95 2.625-3.075-1.7-1.125-2.625-3.075-.925-1.95-1.1-3.925h-.1q-.175 1.975-1.1 3.925-.925 1.95-2.625 3.075Z"/>
    </Icon>
  );
});

IconMaterialCurtainsFilled.displayName = 'AmauiIconMaterialCurtainsFilled';

export default IconMaterialCurtainsFilled;
