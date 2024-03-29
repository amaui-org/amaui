import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWhatshotFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WhatshotFilled'

      short_name='Whatshot'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 22q-2.5 0-4.588-1.1-2.087-1.1-3.462-2.95l4.1-4.1 3 2.5L16 11.4V14h2V8h-6v2h2.6l-3.65 3.65-3-2.5L2.9 16.2q-.425-.95-.663-2.012Q2 13.125 2 12q0-2.075.788-3.9.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 22 12 22Z"/>
    </Icon>
  );
});

IconMaterialWhatshotFilled.displayName = 'AmauiIconMaterialWhatshotFilled';

export default IconMaterialWhatshotFilled;
