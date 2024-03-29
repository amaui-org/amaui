import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMediationFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MediationFilled'

      short_name='Mediation'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 23q-1.25 0-2.125-.875T2 20q0-1.25.875-2.125T5 17q.675 0 1.3.312.625.313 1.05.838 1.475-.8 2.4-2.15.925-1.35 1.15-3H7.8q-.3.9-1.075 1.45Q5.95 15 5 15q-1.25 0-2.125-.875T2 12q0-1.25.875-2.125T5 9q.95 0 1.725.55Q7.5 10.1 7.8 11h3.1q-.225-1.65-1.15-3-.925-1.35-2.4-2.15-.425.525-1.05.838Q5.675 7 5 7q-1.25 0-2.125-.875T2 4q0-1.25.875-2.125T5 1q1.25 0 2.1.85.85.85.9 2.1 2.025 1.05 3.35 2.9 1.325 1.85 1.6 4.15h5.25l-1.6-1.6L18 8l4 4-4 4-1.4-1.4 1.6-1.6h-5.25q-.275 2.3-1.575 4.162-1.3 1.863-3.375 2.888-.05 1.25-.9 2.1Q6.25 23 5 23Z"/>
    </Icon>
  );
});

IconMaterialMediationFilled.displayName = 'AmauiIconMaterialMediationFilled';

export default IconMaterialMediationFilled;
