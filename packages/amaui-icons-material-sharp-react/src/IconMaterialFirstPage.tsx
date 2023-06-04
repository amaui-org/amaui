import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFirstPage = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FirstPage'

      short_name='FirstPage'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 18V6h2v12Zm11 0-6-6 6-6 1.4 1.4-4.6 4.6 4.6 4.6Z"/>
    </Icon>
  );
});

IconMaterialFirstPage.displayName = 'AmauiIconMaterialFirstPage';

export default IconMaterialFirstPage;
