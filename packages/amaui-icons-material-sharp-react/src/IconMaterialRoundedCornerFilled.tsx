import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRoundedCornerFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RoundedCornerFilled'

      short_name='RoundedCorner'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19 21v-2h2v2Zm0-4v-2h2v2ZM3 13v-2h2v2Zm0 4v-2h2v2Zm0-8V7h2v2Zm0-4V3h2v2Zm4 0V3h2v2Zm8 16v-2h2v2Zm-4 0v-2h2v2Zm-4 0v-2h2v2Zm-4 0v-2h2v2Zm16-8V8q0-1.25-.875-2.125T16 5h-5V3h5q2.075 0 3.538 1.463Q21 5.925 21 8v5Z"/>
    </Icon>
  );
});

IconMaterialRoundedCornerFilled.displayName = 'AmauiIconMaterialRoundedCornerFilled';

export default IconMaterialRoundedCornerFilled;
