import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNote = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Note'

      short_name='Note'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M15 6H4v12.01h16V11h-5z" opacity=".3"/><path d="M4 4c-1.1 0-2 .9-2 2v12.01c0 1.1.9 1.99 2 1.99h16c1.1 0 2-.9 2-2v-8l-6-6H4zm16 14.01H4V6h11v5h5v7.01z"/>
    </Icon>
  );
});

IconMaterialNote.displayName = 'AmauiIconMaterialNote';

export default IconMaterialNote;
