import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNewspaperW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NewspaperW100'

      short_name='Newspaper'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2.65 20.35V4.575L3.675 5.6l1.65-1.675L7 5.6l1.675-1.675 1.65 1.675L12 3.925 13.675 5.6l1.65-1.675L17 5.6l1.675-1.675 1.65 1.675 1.025-1.025V20.35Zm.7-.7h8.3v-7.3h-8.3Zm9 0h8.3v-3.3h-8.3Zm0-4h8.3v-3.3h-8.3Zm-9-4h17.3V7.1H3.35Z"/>
    </Icon>
  );
});

IconMaterialNewspaperW100.displayName = 'AmauiIconMaterialNewspaperW100';

export default IconMaterialNewspaperW100;
