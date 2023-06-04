import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRequestPageFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RequestPageFilled'

      short_name='RequestPage'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 18h2v-1h2v-5h-4v-1h4V9h-2V8h-2v1H9v5h4v1H9v2h2Zm-7 4V2h10l6 6v14Z"/>
    </Icon>
  );
});

IconMaterialRequestPageFilled.displayName = 'AmauiIconMaterialRequestPageFilled';

export default IconMaterialRequestPageFilled;
