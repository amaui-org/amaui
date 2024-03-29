import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMapsUgc = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MapsUgc'

      short_name='MapsUgc'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.975 12.025ZM1 23l1.95-6.7q-.475-1.025-.713-2.1Q2 13.125 2 12q0-2.075.788-3.9.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 22 12 22q-1.125 0-2.2-.238-1.075-.237-2.1-.712Zm10-7h2v-3h3v-2h-3V8h-2v3H8v2h3Zm-7.05 4.05 3.2-.95q.125-.05.275-.062.15-.013.275-.013.225 0 .437.037.213.038.413.138.8.4 1.675.6.875.2 1.775.2 3.35 0 5.675-2.325Q20 15.35 20 12q0-3.35-2.325-5.675Q15.35 4 12 4 8.65 4 6.325 6.325 4 8.65 4 12q0 .9.2 1.775.2.875.6 1.675.175.325.188.687.012.363-.088.713Z"/>
    </Icon>
  );
});

IconMaterialMapsUgc.displayName = 'AmauiIconMaterialMapsUgc';

export default IconMaterialMapsUgc;
