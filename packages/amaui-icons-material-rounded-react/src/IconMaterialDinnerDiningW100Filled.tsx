import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDinnerDiningW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DinnerDiningW100Filled'

      short_name='DinnerDining'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.55 20.3q-.125 0-.238-.1-.112-.1-.112-.25 0-.175.112-.262.113-.088.238-.088h16.275q.15 0 .25.1t.1.25q0 .15-.113.25-.112.1-.237.1Zm.25-2.7q.125-.225.325-.5t.475-.55v-8h-.65q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h.65v-1h-.65q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h.65v-1h-.65q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h5.6q.5 0 1 .412.5.413.5 1.288h9.4q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1h-9.4q0 .875-.5 1.287-.5.413-1 .413H7.8v6.85q.675.05 1.313.3.637.25 1.087.7.15-1.35 1.388-2.425Q12.825 12.9 14.7 12.9q1.925 0 3.262 1.175Q19.3 15.25 19.3 16.9v.7Zm4-11.45h2.55v-.2q0-.3-.25-.55-.25-.25-.55-.25H7.8Zm0 1.7h1.75q.3 0 .55-.25.25-.25.25-.55v-.2H7.8Zm-2.5-1.7h1.8v-1H5.3Zm0 1.7h1.8v-1H5.3Zm0 8.15q.425-.275.85-.413.425-.137.95-.187V8.55H5.3Z"/>
    </Icon>
  );
});

IconMaterialDinnerDiningW100Filled.displayName = 'AmauiIconMaterialDinnerDiningW100Filled';

export default IconMaterialDinnerDiningW100Filled;
