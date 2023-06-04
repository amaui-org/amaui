import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPlayDisabledFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlayDisabledFilled'

      short_name='PlayDisabled'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16.45 13.6 8 5.15V5l11 7Zm3.3 9L13 15.8 8 19v-8.2L1.4 4.2l1.4-1.4 18.4 18.4Z"/>
    </Icon>
  );
});

IconMaterialPlayDisabledFilled.displayName = 'AmauiIconMaterialPlayDisabledFilled';

export default IconMaterialPlayDisabledFilled;
