import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDoNotDisturbOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoNotDisturbOffW100'

      short_name='DoNotDisturbOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m15.15 12.35-.7-.7h1.575q.125 0 .225.1t.1.25q0 .15-.1.25t-.25.1Zm4.45 8.25-1.975-1.975q-1.15.975-2.575 1.525-1.425.55-3.05.55-1.8 0-3.387-.688-1.588-.687-2.763-1.862-1.175-1.175-1.863-2.763Q3.3 13.8 3.3 12q0-1.625.55-3.05.55-1.425 1.525-2.575l-2-2q-.1-.1-.087-.238Q3.3 4 3.4 3.9q.125-.125.25-.125t.25.125l16.225 16.225q.1.1.088.238-.013.137-.113.237-.125.125-.25.125t-.25-.125Zm-.2-4-.525-.525q.55-.9.837-1.925Q20 13.125 20 12q0-3.325-2.337-5.663Q15.325 4 12 4q-1.125 0-2.15.287-1.025.288-1.925.838L7.4 4.6q1.025-.625 2.175-.963Q10.725 3.3 12 3.3q1.8 0 3.388.687 1.587.688 2.762 1.863t1.863 2.762Q20.7 10.2 20.7 12q0 1.275-.337 2.425-.338 1.15-.963 2.175Zm-2.275 1.525L11.35 12.35H7.975q-.125 0-.225-.1t-.1-.25q0-.15.1-.25t.25-.1h2.65L5.875 6.875Q5 7.925 4.5 9.225T4 12q0 3.325 2.338 5.663Q8.675 20 12 20q1.475 0 2.775-.5 1.3-.5 2.35-1.375ZM14.45 11.65Zm-2.95.85Z"/>
    </Icon>
  );
});

IconMaterialDoNotDisturbOffW100.displayName = 'AmauiIconMaterialDoNotDisturbOffW100';

export default IconMaterialDoNotDisturbOffW100;
