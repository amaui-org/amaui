import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBackpack = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Backpack'

      short_name='Backpack'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 22V8q0-1.4.85-2.45Q5.7 4.5 7 4.15V2h3v2h4V2h3v2.15q1.3.35 2.15 1.4Q20 6.6 20 8v14Zm2-2h12V8q0-.825-.587-1.412Q16.825 6 16 6H8q-.825 0-1.412.588Q6 7.175 6 8Zm8.5-4h2v-4h-9v2h7ZM12 13Z"/>
    </Icon>
  );
});

IconMaterialBackpack.displayName = 'AmauiIconMaterialBackpack';

export default IconMaterialBackpack;
