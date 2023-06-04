import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDemographyW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DemographyW100'

      short_name='Demography'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M18 18.15q.625 0 1.062-.438.438-.437.438-1.062t-.438-1.063q-.437-.437-1.062-.437t-1.062.437q-.438.438-.438 1.063t.438 1.062q.437.438 1.062.438Zm0 3q.75 0 1.4-.35.65-.35 1.075-.975-.575-.35-1.2-.513-.625-.162-1.275-.162-.65 0-1.275.162-.625.163-1.2.513.425.625 1.075.975.65.35 1.4.35ZM4.3 19.7V4.3h15.4v7.225q-.2-.05-.363-.075-.162-.025-.337-.075V5H5v14h6.35q.025.2.05.362.025.163.075.338ZM5 18v1V5v6.375V11.3 18Zm2.65-1.95h3.925q.05-.175.125-.338.075-.162.15-.362h-4.2Zm0-3.7h6.725q.4-.225.725-.388.325-.162.7-.287v-.025H7.65Zm0-3.7h8.7v-.7h-8.7ZM18 21.85q-1.55 0-2.625-1.075T14.3 18.15q0-1.55 1.075-2.625T18 14.45q1.55 0 2.625 1.075T21.7 18.15q0 1.55-1.075 2.625T18 21.85Z"/>
    </Icon>
  );
});

IconMaterialDemographyW100.displayName = 'AmauiIconMaterialDemographyW100';

export default IconMaterialDemographyW100;
