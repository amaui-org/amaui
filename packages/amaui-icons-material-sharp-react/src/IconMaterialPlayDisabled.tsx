import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPlayDisabled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlayDisabled'

      short_name='PlayDisabled'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m16.45 13.6-1.4-1.45-.95-.9L8 5.15V5l11 7Zm3.3 9L13 15.8 8 19v-8.2L1.4 4.2l1.4-1.4 18.4 18.4ZM10 12.8Zm0 2.55 1.55-1L10 12.8Zm4.1-4.1Z"/>
    </Icon>
  );
});

IconMaterialPlayDisabled.displayName = 'AmauiIconMaterialPlayDisabled';

export default IconMaterialPlayDisabled;
