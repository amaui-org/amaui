import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChair = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Chair'

      short_name='Chair'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 21v-2H1V8h3V3h16v5h3v11h-3v2h-2v-2H6v2Zm-1-4h18v-7h-2v5H5v-5H3Zm4-4h10V8h1V5H6v3h1Zm5 2Zm0-2Zm0 2Z"/>
    </Icon>
  );
});

IconMaterialChair.displayName = 'AmauiIconMaterialChair';

export default IconMaterialChair;
