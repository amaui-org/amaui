import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShareLocationW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShareLocationW100'

      short_name='ShareLocation'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13 20.65v-.7q1.15-.175 2.137-.575.988-.4 1.763-1.025l.475.5q-.95.75-2.025 1.175-1.075.425-2.35.625Zm5.85-3.25-.5-.5q.65-.825 1.05-1.813.4-.987.55-2.087h.7q-.125 1.175-.588 2.287Q19.6 16.4 18.85 17.4Zm1.1-6.4q-.15-1.125-.55-2.113Q19 7.9 18.35 7.1l.525-.475q.825 1.15 1.2 2.05.375.9.575 2.325ZM11 20.65q-3.275-.425-5.462-2.888Q3.35 15.3 3.35 12q0-3.325 2.188-5.788Q7.725 3.75 11 3.35v.7q-3 .425-4.975 2.675Q4.05 8.975 4.05 12q0 3 1.975 5.25T11 19.95ZM16.95 5.7q-.9-.675-1.888-1.1-.987-.425-2.012-.55v-.7q1.2.175 2.262.612 1.063.438 2.063 1.188ZM12 15.725Q10.5 14.4 9.75 13.3 9 12.2 9 11.25q0-1.4.9-2.238.9-.837 2.1-.837 1.2 0 2.1.837.9.838.9 2.238 0 .95-.75 2.05-.75 1.1-2.25 2.425Zm0-3.75q.35 0 .575-.225.225-.225.225-.575t-.225-.575q-.225-.225-.575-.225t-.575.225q-.225.225-.225.575t.225.575q.225.225.575.225Z"/>
    </Icon>
  );
});

IconMaterialShareLocationW100.displayName = 'AmauiIconMaterialShareLocationW100';

export default IconMaterialShareLocationW100;
