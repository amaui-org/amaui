import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMapsUgcFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MapsUgcFilled'

      short_name='MapsUgc'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m1 23 1.95-6.7q-.475-1.025-.713-2.1Q2 13.125 2 12q0-2.075.788-3.9.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 22 12 22q-1.125 0-2.2-.238-1.075-.237-2.1-.712Zm10-7h2v-3h3v-2h-3V8h-2v3H8v2h3Z"/>
    </Icon>
  );
});

IconMaterialMapsUgcFilled.displayName = 'AmauiIconMaterialMapsUgcFilled';

export default IconMaterialMapsUgcFilled;
