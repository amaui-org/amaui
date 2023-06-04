import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialExpandContentFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExpandContentFilled'

      short_name='ExpandContent'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 19v-6h2v4h4v2Zm12-8V7h-4V5h6v6Z"/>
    </Icon>
  );
});

IconMaterialExpandContentFilled.displayName = 'AmauiIconMaterialExpandContentFilled';

export default IconMaterialExpandContentFilled;
