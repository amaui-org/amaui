import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHomeWork = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomeWork'

      short_name='HomeWork'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17 9h2V7h-2Zm0 4h2v-2h-2Zm0 4h2v-2h-2Zm0 4v-2h4V5h-9v1.4l-2-1.45V3h13v18ZM1 21V11l7-5 7 5v10H9v-5H7v5Zm2-2h2v-5h6v5h2v-7L8 8.45 3 12Zm14-9Zm-6 9v-5H5v5-5h6Z"/>
    </Icon>
  );
});

IconMaterialHomeWork.displayName = 'AmauiIconMaterialHomeWork';

export default IconMaterialHomeWork;
