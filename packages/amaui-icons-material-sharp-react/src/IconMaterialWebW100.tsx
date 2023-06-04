import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWebW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WebW100'

      short_name='Web'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.3 18.7V5.3h17.4v13.4Zm.7-5.4h11.15v-4H4ZM4 18h11.15v-4H4Zm11.85 0H20V9.3h-4.15Z"/>
    </Icon>
  );
});

IconMaterialWebW100.displayName = 'AmauiIconMaterialWebW100';

export default IconMaterialWebW100;
