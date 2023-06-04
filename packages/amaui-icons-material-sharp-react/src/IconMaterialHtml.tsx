import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHtml = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Html'

      short_name='Html'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 15V9h1.5v2h2V9H5v6H3.5v-2.5h-2V15Zm7.75 0v-4.5H6V9h5v1.5H9.25V15ZM20 15V9h1.5v4.5H24V15Zm-8 0V9h6.5v6H17v-4.5h-1V14h-1.5v-3.5h-1V15Z"/>
    </Icon>
  );
});

IconMaterialHtml.displayName = 'AmauiIconMaterialHtml';

export default IconMaterialHtml;
