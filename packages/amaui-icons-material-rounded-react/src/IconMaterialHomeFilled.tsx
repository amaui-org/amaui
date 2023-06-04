import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHomeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomeFilled'

      short_name='Home'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 21q-.825 0-1.412-.587Q4 19.825 4 19v-9q0-.475.213-.9.212-.425.587-.7l6-4.5q.275-.2.575-.3.3-.1.625-.1t.625.1q.3.1.575.3l6 4.5q.375.275.588.7.212.425.212.9v9q0 .825-.587 1.413Q18.825 21 18 21h-4v-7h-4v7Z"/>
    </Icon>
  );
});

IconMaterialHomeFilled.displayName = 'AmauiIconMaterialHomeFilled';

export default IconMaterialHomeFilled;
