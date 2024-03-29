import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPrescriptionsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PrescriptionsFilled'

      short_name='Prescriptions'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m18.375 22.075 1.15-1.15-4.45-4.45-1.15 1.15Q13 18.55 13 19.85t.925 2.225Q14.85 23 16.15 23t2.225-.925Zm2.55-2.55 1.15-1.15Q23 17.45 23 16.15t-.925-2.225Q21.15 13 19.85 13t-2.225.925l-1.15 1.15ZM7 9h10V7H7Zm5-4.75q.325 0 .538-.213.212-.212.212-.537 0-.325-.212-.538-.213-.212-.538-.212-.325 0-.537.212-.213.213-.213.538 0 .325.213.537.212.213.537.213ZM11.125 21H3V3h6.2q.325-.9 1.088-1.45Q11.05 1 12 1t1.713.55Q14.475 2.1 14.8 3H21v8.125q-1.05-.25-2.087-.038-1.038.213-1.913.788V11H7v2h8.725l-2 2H7v2h4.875q-.575.875-.787 1.913-.213 1.037.037 2.087Z"/>
    </Icon>
  );
});

IconMaterialPrescriptionsFilled.displayName = 'AmauiIconMaterialPrescriptionsFilled';

export default IconMaterialPrescriptionsFilled;
