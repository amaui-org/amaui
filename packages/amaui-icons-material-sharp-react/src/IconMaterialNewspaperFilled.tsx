import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNewspaperFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NewspaperFilled'

      short_name='Newspaper'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 21V3l1.675 1.675L5.325 3 7 4.675 8.675 3l1.65 1.675L12 3l1.675 1.675L15.325 3 17 4.675 18.675 3l1.65 1.675L22 3v18Zm2-2h7v-6H4Zm9 0h7v-2h-7Zm0-4h7v-2h-7Zm-9-4h16V8H4Z"/>
    </Icon>
  );
});

IconMaterialNewspaperFilled.displayName = 'AmauiIconMaterialNewspaperFilled';

export default IconMaterialNewspaperFilled;
