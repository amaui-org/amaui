import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial4mp = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='4mp'

      short_name='4mp'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.5 11.5H14V10h1V8.5h-1v-3h-1.5v3H11v-3H9.5V10h3ZM3 21V3h18v18Zm2-2h14V5H5Zm1-.5h1.5V14h1v3H10v-3h1v4.5h1.5v-6H6Zm7.5 0H15V17h3v-4.5h-4.5ZM15 14h1.5v1.5H15ZM5 5v14Z"/>
    </Icon>
  );
});

IconMaterial4mp.displayName = 'AmauiIconMaterial4mp';

export default IconMaterial4mp;
