import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRepeatOneOnW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RepeatOneOnW100'

      short_name='RepeatOneOn'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.9 14.6h.7V9.4h-1.8v.7h1.1Zm-8.1 7.1q-.65 0-1.075-.425Q2.3 20.85 2.3 20.2V3.8q0-.65.425-1.075Q3.15 2.3 3.8 2.3h16.4q.65 0 1.075.425.425.425.425 1.075v16.4q0 .65-.425 1.075-.425.425-1.075.425Zm3.45-.85.5-.5L5.5 18.1h12.6v-4.7h-.7v4H5.5l2.25-2.25-.5-.5-3.1 3.1ZM5.9 10.6h.7v-4h11.9l-2.25 2.25.5.5 3.1-3.1-3.1-3.1-.5.5L18.5 5.9H5.9Z"/>
    </Icon>
  );
});

IconMaterialRepeatOneOnW100.displayName = 'AmauiIconMaterialRepeatOneOnW100';

export default IconMaterialRepeatOneOnW100;
