import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPropaneW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PropaneW100'

      short_name='Propane'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.35 7.3h5.3v-.45q0-.35-.225-.575-.225-.225-.575-.225h-3.7q-.35 0-.575.225-.225.225-.225.575Zm6-.45v.45H17q1.95 0 3.325 1.375Q21.7 10.05 21.7 12q0 1.95-1.375 3.325Q18.95 16.7 17 16.7v1.35q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25V16.7H7.7v1.35q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25V16.7q-1.95 0-3.325-1.375Q2.3 13.95 2.3 12q0-1.95 1.375-3.325Q5.05 7.3 7 7.3h1.65v-.45q0-.65.425-1.075.425-.425 1.075-.425h3.7q.65 0 1.075.425.425.425.425 1.075ZM7 16h10q1.65 0 2.825-1.175Q21 13.65 21 12q0-1.65-1.175-2.825Q18.65 8 17 8H7Q5.35 8 4.175 9.175 3 10.35 3 12q0 1.65 1.175 2.825Q5.35 16 7 16Zm5-4Z"/>
    </Icon>
  );
});

IconMaterialPropaneW100.displayName = 'AmauiIconMaterialPropaneW100';

export default IconMaterialPropaneW100;
