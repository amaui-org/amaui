import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDemographyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DemographyW100Filled'

      short_name='Demography'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M18 18.15q.625 0 1.062-.438.438-.437.438-1.062t-.438-1.063q-.437-.437-1.062-.437t-1.062.437q-.438.438-.438 1.063t.438 1.062q.437.438 1.062.438Zm0 3q.75 0 1.4-.35.65-.35 1.075-.975-.575-.35-1.2-.513-.625-.162-1.275-.162-.65 0-1.275.162-.625.163-1.2.513.425.625 1.075.975.65.35 1.4.35Zm0 .7q-1.55 0-2.625-1.075T14.3 18.15q0-1.55 1.075-2.625T18 14.45q1.55 0 2.625 1.075T21.7 18.15q0 1.55-1.075 2.625T18 21.85ZM8 8.65h8q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1H8q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1Zm3.475 11.05H5.8q-.625 0-1.062-.438Q4.3 18.825 4.3 18.2V5.8q0-.625.438-1.063Q5.175 4.3 5.8 4.3h12.4q.625 0 1.063.437.437.438.437 1.063v5.725q-.425-.1-.85-.163-.425-.062-.85-.062-.575 0-1.125.1t-1.075.275q-.075-.025-.175-.025H8q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1h6.375q-.85.55-1.488 1.312-.637.763-1.037 1.688H8q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1h3.575q-.125.475-.2.962-.075.488-.075.988 0 .35.025.85t.15.85Z"/>
    </Icon>
  );
});

IconMaterialDemographyW100Filled.displayName = 'AmauiIconMaterialDemographyW100Filled';

export default IconMaterialDemographyW100Filled;
