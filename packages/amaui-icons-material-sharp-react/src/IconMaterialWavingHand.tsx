import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWavingHand = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WavingHand'

      short_name='WavingHand'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17 23q2.5 0 4.25-1.75T23 17h-1.5q0 1.875-1.312 3.188Q18.875 21.5 17 21.5ZM1 7h1.5q0-1.875 1.312-3.188Q5.125 2.5 7 2.5V1Q4.5 1 2.75 2.75T1 7Zm2.525 13.475q-2.5-2.5-2.5-6t2.5-6L8.8 3.2l2.125 2.125L15.15 1.1l2.125 2.125 1.45-1.45 3.4 3.4L21.05 6.25 23.3 8.5l-2.1 2.1 2.1 2.1-7.775 7.775Q13 23 9.512 22.988q-3.487-.013-5.987-2.513Zm1.4-1.4q.95.95 2.15 1.425 1.2.475 2.45.475 1.25 0 2.45-.475 1.2-.475 2.15-1.425l6.35-6.35-.7-.7-3.9 3.9L14.45 14.5l6-6-.7-.7-5.275 5.275-1.425-1.425L19.4 5.3l-.7-.7-6.35 6.35-1.425-1.425L15.85 4.6l-.7-.7-6.625 6.625q.525 1.35.25 2.812Q8.5 14.8 7.4 15.9L6 14.475q.875-.875.875-2.125T6 10.225l3.5-3.5-.7-.7-3.85 3.85q-.95.95-1.437 2.15-.488 1.2-.488 2.45 0 1.25.475 2.45.475 1.2 1.425 2.15Z"/>
    </Icon>
  );
});

IconMaterialWavingHand.displayName = 'AmauiIconMaterialWavingHand';

export default IconMaterialWavingHand;
