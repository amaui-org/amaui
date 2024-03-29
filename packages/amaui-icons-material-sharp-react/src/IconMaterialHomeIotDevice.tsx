import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHomeIotDevice = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomeIotDevice'

      short_name='HomeIotDevice'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.525 18q1.05 0 1.775-.725.725-.725.725-1.775 0-.6-.275-1.175-.275-.575-.825-.925l-.9-.6V6.5q0-.225-.137-.363Q5.75 6 5.525 6q-.225 0-.362.137-.138.138-.138.363v6.3l-.9.6q-.55.375-.825.925-.275.55-.275 1.175 0 1.05.725 1.775.725.725 1.775.725Zm0 2q-1.875 0-3.187-1.3-1.313-1.3-1.313-3.2 0-1.2.55-2.15t1.45-1.55V6.5q0-1.05.725-1.775Q4.475 4 5.525 4q1.05 0 1.775.725.725.725.725 1.775v5.3q.9.6 1.45 1.55.55.95.55 2.15 0 1.875-1.312 3.188Q7.4 20 5.525 20Zm8.175-5q-1.2-.825-1.95-2.125T11 10q0-2.5 1.75-4.25T17 4q2.5 0 4.25 1.75T23 10q0 1.575-.75 2.875T20.3 15Zm.7-2h5.3q.675-.6.988-1.35Q21 10.9 21 10q0-1.65-1.175-2.825Q18.65 6 17 6q-1.65 0-2.825 1.175Q13 8.35 13 10q0 .9.363 1.65.362.75 1.037 1.35Zm2.6 7q-.6 0-1.05-.45-.45-.45-.45-1.05h3q0 .6-.45 1.05Q17.6 20 17 20Zm-3-2v-2h6v2Zm-8.475-2.5ZM17 9.5Z"/>
    </Icon>
  );
});

IconMaterialHomeIotDevice.displayName = 'AmauiIconMaterialHomeIotDevice';

export default IconMaterialHomeIotDevice;
