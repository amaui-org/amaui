import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFoundationFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FoundationFilled'

      short_name='Foundation'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 20v-3H3v-2h2v-3H2l10-9 10 9h-3v3h2v2h-2v3h-2v-3h-4v3h-2v-3H7v3Zm2-5h4V6.6l-4 3.6Zm6 0h4v-4.8l-4-3.6Z"/>
    </Icon>
  );
});

IconMaterialFoundationFilled.displayName = 'AmauiIconMaterialFoundationFilled';

export default IconMaterialFoundationFilled;
