import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGppBadW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GppBadW100'

      short_name='GppBad'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m9.9 14.5 2.1-2.1 2.1 2.1.5-.5-2.1-2.1 2.1-2.1-.5-.5-2.1 2.1-2.1-2.1-.5.5 2.1 2.1L9.4 14Zm2.1 6.15q-2.875-.9-4.787-3.55-1.913-2.65-1.913-6V5.9L12 3.4l6.7 2.5v5.2q0 3.35-1.912 6-1.913 2.65-4.788 3.55Zm0-8.625Zm0 7.875q2.6-.825 4.3-3.3 1.7-2.475 1.7-5.5V6.375L12 4.15 6 6.375V11.1q0 3.025 1.7 5.5t4.3 3.3Z"/>
    </Icon>
  );
});

IconMaterialGppBadW100.displayName = 'AmauiIconMaterialGppBadW100';

export default IconMaterialGppBadW100;
