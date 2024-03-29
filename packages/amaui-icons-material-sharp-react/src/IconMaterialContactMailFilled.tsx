import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialContactMailFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContactMailFilled'

      short_name='ContactMail'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 21V3h24v18Zm9-7q1.25 0 2.125-.875T12 11q0-1.25-.875-2.125T9 8q-1.25 0-2.125.875T6 11q0 1.25.875 2.125T9 14Zm5-3h7V6h-7ZM2.1 19h13.8q-1.05-1.875-2.9-2.938Q11.15 15 9 15t-4 1.062Q3.15 17.125 2.1 19Zm15.4-9.25L15 8V7l2.5 1.75L20 7v1Z"/>
    </Icon>
  );
});

IconMaterialContactMailFilled.displayName = 'AmauiIconMaterialContactMailFilled';

export default IconMaterialContactMailFilled;
