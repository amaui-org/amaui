import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOutpatient = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Outpatient'

      short_name='Outpatient'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M1 21V3h14v18H9v-4H7v4Zm2-2h2v-4h6v4h2V5H3Zm2-6h2v-2H5Zm0-4h2V7H5Zm4 4h2v-2H9Zm0-4h2V7H9Zm10.5 6.5-1.4-1.4 1.075-1.1H16v-2h3.175L18.1 9.9l1.4-1.4L23 12ZM5 19v-4h6v4-4H5v4Z"/>
    </Icon>
  );
});

IconMaterialOutpatient.displayName = 'AmauiIconMaterialOutpatient';

export default IconMaterialOutpatient;
