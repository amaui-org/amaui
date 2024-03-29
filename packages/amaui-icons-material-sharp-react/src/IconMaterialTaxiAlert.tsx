import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTaxiAlert = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TaxiAlert'

      short_name='TaxiAlert'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 22v-9l2.45-7H8V4h3.3q-.3.975-.3 2t.3 2H5.85L4.8 11h8.3q.975.975 2.25 1.488Q16.625 13 18 13q.5 0 .962-.062.463-.063.938-.188l.1.25v9h-3v-2H5v2Zm2-9v5Zm2.5 4q.625 0 1.062-.438Q8 16.125 8 15.5t-.438-1.062Q7.125 14 6.5 14t-1.062.438Q5 14.875 5 15.5t.438 1.062Q5.875 17 6.5 17Zm9 0q.625 0 1.062-.438Q17 16.125 17 15.5t-.438-1.062Q16.125 14 15.5 14t-1.062.438Q14 14.875 14 15.5t.438 1.062Q14.875 17 15.5 17Zm2.5-6q-2.075 0-3.537-1.463Q13 8.075 13 6t1.463-3.538Q15.925 1 18 1t3.538 1.462Q23 3.925 23 6q0 2.075-1.462 3.537Q20.075 11 18 11Zm-.5-4h1V3h-1Zm.5 2q.2 0 .35-.15.15-.15.15-.35 0-.2-.15-.35Q18.2 8 18 8q-.2 0-.35.15-.15.15-.15.35 0 .2.15.35.15.15.35.15ZM4 18h14v-5H4Z"/>
    </Icon>
  );
});

IconMaterialTaxiAlert.displayName = 'AmauiIconMaterialTaxiAlert';

export default IconMaterialTaxiAlert;
