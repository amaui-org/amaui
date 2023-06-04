import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialViewHeadlineFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewHeadlineFilled'

      short_name='ViewHeadline'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 15v-2h16v2Zm0 4v-2h16v2Zm0-8V9h16v2Zm0-4V5h16v2Z"/>
    </Icon>
  );
});

IconMaterialViewHeadlineFilled.displayName = 'AmauiIconMaterialViewHeadlineFilled';

export default IconMaterialViewHeadlineFilled;
