import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHome = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Home'

      short_name='Home'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 19h3v-6h6v6h3v-9l-6-4.5L6 10Zm0 2q-.825 0-1.412-.587Q4 19.825 4 19v-9q0-.475.213-.9.212-.425.587-.7l6-4.5q.275-.2.575-.3.3-.1.625-.1t.625.1q.3.1.575.3l6 4.5q.375.275.588.7.212.425.212.9v9q0 .825-.587 1.413Q18.825 21 18 21h-5v-6h-2v6Zm6-8.75Z"/>
    </Icon>
  );
});

IconMaterialHome.displayName = 'AmauiIconMaterialHome';

export default IconMaterialHome;
