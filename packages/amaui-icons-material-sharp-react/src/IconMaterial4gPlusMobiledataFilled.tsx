import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial4gPlusMobiledataFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='4gPlusMobiledataFilled'

      short_name='4gPlusMobiledata'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M20 15v-2h-2v-2h2V9h2v2h2v2h-2v2ZM5 17v-3H1V7h2v5h2V7h2v5h1v2H7v3Zm4 0V7h8v2h-6v6h4v-2h-2v-2h4v6Z"/>
    </Icon>
  );
});

IconMaterial4gPlusMobiledataFilled.displayName = 'AmauiIconMaterial4gPlusMobiledataFilled';

export default IconMaterial4gPlusMobiledataFilled;
