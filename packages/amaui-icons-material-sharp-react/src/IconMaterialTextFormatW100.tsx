import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTextFormatW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextFormatW100'

      short_name='TextFormat'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.65 18.4v-.7h12.7v.7Zm2.175-3.7 3.85-10.1h.7l3.75 10.1h-.75l-1.05-2.85h-4.7l-1.05 2.85Zm2.05-3.5h4.2l-2-5.5h-.1Z"/>
    </Icon>
  );
});

IconMaterialTextFormatW100.displayName = 'AmauiIconMaterialTextFormatW100';

export default IconMaterialTextFormatW100;
