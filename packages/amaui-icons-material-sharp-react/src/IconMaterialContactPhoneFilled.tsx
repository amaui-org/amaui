import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialContactPhoneFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContactPhoneFilled'

      short_name='ContactPhone'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 21V3h24v18Zm9-7q1.25 0 2.125-.875T12 11q0-1.25-.875-2.125T9 8q-1.25 0-2.125.875T6 11q0 1.25.875 2.125T9 14Zm10 4 2-2-1.5-2h-1.65q-.15-.45-.25-.963-.1-.512-.1-1.037 0-.525.1-1.012.1-.488.25-.988h1.65L21 8l-2-2q-1.35 1.05-2.175 2.662Q16 10.275 16 12t.825 3.337Q17.65 16.95 19 18ZM2.1 19h13.8q-1.05-1.875-2.9-2.938Q11.15 15 9 15t-4 1.062Q3.15 17.125 2.1 19Z"/>
    </Icon>
  );
});

IconMaterialContactPhoneFilled.displayName = 'AmauiIconMaterialContactPhoneFilled';

export default IconMaterialContactPhoneFilled;
