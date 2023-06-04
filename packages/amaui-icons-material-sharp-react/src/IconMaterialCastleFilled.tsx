import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCastleFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CastleFilled'

      short_name='Castle'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M1 21V9h2v2h2V3h2v2h2V3h2v2h2V3h2v2h2V3h2v8h2V9h2v12h-9v-5h-4v5Zm8-9h2V9H9Zm4 0h2V9h-2Z"/>
    </Icon>
  );
});

IconMaterialCastleFilled.displayName = 'AmauiIconMaterialCastleFilled';

export default IconMaterialCastleFilled;
