import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMotionSensorAlertFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MotionSensorAlertFilled'

      short_name='MotionSensorAlert'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19 22q-2.075 0-3.537-1.462Q14 19.075 14 17q0-2.075 1.463-3.538Q16.925 12 19 12t3.538 1.462Q24 14.925 24 17q0 2.075-1.462 3.538Q21.075 22 19 22Zm-.5-4h1v-4h-1Zm.5 2q.2 0 .35-.15.15-.15.15-.35 0-.2-.15-.35Q19.2 19 19 19q-.2 0-.35.15-.15.15-.15.35 0 .2.15.35.15.15.35.15ZM5.1 11h2q.3 1.475 1.363 2.537Q9.525 14.6 11 14.9v2q-2.3-.35-3.925-1.975T5.1 11ZM11 3.1v2q-1.475.3-2.537 1.362Q7.4 7.525 7.1 9h-2q.35-2.3 1.975-3.938Q8.7 3.425 11 3.1ZM12 8q.85 0 1.425.575Q14 9.15 14 10q0 .825-.575 1.412Q12.85 12 12 12q-.825 0-1.412-.588Q10 10.825 10 10q0-.85.588-1.425Q11.175 8 12 8Zm1-4.9q2.3.35 3.938 1.975Q18.575 6.7 18.9 9h-2q-.3-1.475-1.362-2.538Q14.475 5.4 13 5.1ZM2 6V0h6v2H4v4Zm6 14H2v-6h2v4h4ZM20 6V2h-4V0h6v6Z"/>
    </Icon>
  );
});

IconMaterialMotionSensorAlertFilled.displayName = 'AmauiIconMaterialMotionSensorAlertFilled';

export default IconMaterialMotionSensorAlertFilled;
