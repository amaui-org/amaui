import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKitchen = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Kitchen'

      short_name='Kitchen'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 8V5h2v3Zm0 9v-5h2v5Zm-4 5V2h16v20Zm2-2h12v-9H6ZM6 9h12V4H6Z"/>
    </Icon>
  );
});

IconMaterialKitchen.displayName = 'AmauiIconMaterialKitchen';

export default IconMaterialKitchen;
