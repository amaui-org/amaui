import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGasMeterFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GasMeterFilled'

      short_name='GasMeter'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 22V4h5V2h2v2h2V2h2v2h5v18Zm4-12h8V8H8Zm4 8q1.05 0 1.775-.712.725-.713.725-1.738 0-.825-.475-1.413Q13.55 13.55 12 11.75q-1.575 1.8-2.037 2.4-.463.6-.463 1.4 0 1.025.725 1.738Q10.95 18 12 18Z"/>
    </Icon>
  );
});

IconMaterialGasMeterFilled.displayName = 'AmauiIconMaterialGasMeterFilled';

export default IconMaterialGasMeterFilled;
