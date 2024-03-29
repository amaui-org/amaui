import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChalet = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Chalet'

      short_name='Chalet'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17.5 11V9.8l-.75.75-.7-.7L17.5 8.4v-.9h-.9l-1.45 1.45-.7-.7.75-.75H14v-1h1.2l-.75-.75.7-.7L16.6 6.5h.9v-.9l-1.45-1.45.7-.7.75.75V3h1v1.2l.75-.75.7.7L18.5 5.6v.9h.9l1.45-1.45.7.7-.75.75H22v1h-1.2l.75.75-.7.7L19.4 7.5h-.9v.9l1.45 1.45-.7.7-.75-.75V11Zm-1.4 5.425-1.1-1.1V20H5v-4.7l-1.1 1.1L2.5 15 10 7.5l7.5 7.5ZM7 18h2v-3h2v3h2v-4.675l-3-3-3 3Zm0 0h6-6Z"/>
    </Icon>
  );
});

IconMaterialChalet.displayName = 'AmauiIconMaterialChalet';

export default IconMaterialChalet;
