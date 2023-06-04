import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHomeWorkFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomeWorkFilled'

      short_name='HomeWork'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M1 21V11l7-5 7 5v10h-5v-6H6v6ZM17 9h2V7h-2Zm0 4h2v-2h-2Zm0 4h2v-2h-2Zm0 4V10l-7-5.05V3h13v18Z"/>
    </Icon>
  );
});

IconMaterialHomeWorkFilled.displayName = 'AmauiIconMaterialHomeWorkFilled';

export default IconMaterialHomeWorkFilled;
