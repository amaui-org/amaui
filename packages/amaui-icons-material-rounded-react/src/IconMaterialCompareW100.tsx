import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCompareW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CompareW100'

      short_name='Compare'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.65 22q-.15 0-.25-.1t-.1-.25V19.7H5.8q-.65 0-1.075-.425Q4.3 18.85 4.3 18.2V5.8q0-.65.425-1.075Q5.15 4.3 5.8 4.3h5.5V2.35q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v19.3q0 .15-.1.25t-.25.1ZM5 18h6.3v-7.55Zm9 1.7V12l5 6V5.8q0-.3-.25-.55Q18.5 5 18.2 5H14v-.7h4.2q.65 0 1.075.425.425.425.425 1.075v12.4q0 .65-.425 1.075-.425.425-1.075.425Z"/>
    </Icon>
  );
});

IconMaterialCompareW100.displayName = 'AmauiIconMaterialCompareW100';

export default IconMaterialCompareW100;
