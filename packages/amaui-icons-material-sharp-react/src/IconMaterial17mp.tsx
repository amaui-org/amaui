import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial17mp = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='17mp'

      short_name='17mp'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.5 11.5H10v-6H7V7h1.5Zm4.75 0H15l1.85-6H12V7h2.6ZM3 21V3h18v18Zm2-2h14V5H5Zm1-.5h1.5V14h1v3H10v-3h1v4.5h1.5v-6H6Zm7.5 0H15V17h3v-4.5h-4.5ZM15 14h1.5v1.5H15ZM5 5v14Z"/>
    </Icon>
  );
});

IconMaterial17mp.displayName = 'AmauiIconMaterial17mp';

export default IconMaterial17mp;
