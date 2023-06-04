import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLastPage = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LastPage'

      short_name='LastPage'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m7 18-1.4-1.4 4.6-4.6-4.6-4.6L7 6l6 6Zm9 0V6h2v12Z"/>
    </Icon>
  );
});

IconMaterialLastPage.displayName = 'AmauiIconMaterialLastPage';

export default IconMaterialLastPage;
