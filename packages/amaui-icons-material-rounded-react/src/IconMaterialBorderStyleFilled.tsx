import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBorderStyleFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BorderStyleFilled'

      short_name='BorderStyle'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15 21v-2h2v2Zm4 0v-2h2v2ZM7 21v-2h2v2Zm4 0v-2h2v2Zm8-4v-2h2v2Zm0-4v-2h2v2ZM3 21V5q0-.825.587-1.413Q4.175 3 5 3h16v2H5v16ZM19 9V7h2v2Z"/>
    </Icon>
  );
});

IconMaterialBorderStyleFilled.displayName = 'AmauiIconMaterialBorderStyleFilled';

export default IconMaterialBorderStyleFilled;
