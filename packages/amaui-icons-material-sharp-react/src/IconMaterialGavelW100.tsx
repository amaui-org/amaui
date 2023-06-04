import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGavelW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GavelW100'

      short_name='Gavel'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.15 20.35v-.7h10.7v.7Zm6.05-5.65L5.45 9.95l1.2-1.25 4.8 4.75Zm5.25-5.25-4.75-4.8 1.25-1.2L16.7 8.2Zm5.15 9.65L8.45 6.95l.5-.5L21.1 18.6Z"/>
    </Icon>
  );
});

IconMaterialGavelW100.displayName = 'AmauiIconMaterialGavelW100';

export default IconMaterialGavelW100;
