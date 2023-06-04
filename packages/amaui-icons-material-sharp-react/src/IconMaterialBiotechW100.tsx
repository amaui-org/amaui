import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBiotechW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BiotechW100'

      short_name='Biotech'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.15 20.35v-.7h5v-3.3h-.65q-1.8 0-3.075-1.275Q6.15 13.8 6.15 12q0-1.35.788-2.45.787-1.1 2.062-1.6 0-1.075.875-1.65t1.825-.15l-.7-1.9.95-.35-.35-.95.95-.35.35.95.85-.3 2.4 6.55-.85.35.35.95-.95.35-.35-.95-.95.4-.65-1.9q-.275.45-.737.725Q11.55 10 11 10q-.65 0-1.162-.375-.513-.375-.738-.975-1.025.425-1.637 1.325-.613.9-.613 2.025 0 1.525 1.062 2.587Q8.975 15.65 10.5 15.65h7.35v.7h-6v3.3h6v.7Zm7.7-10.4 1.4-.55-1.9-5.25-1.45.5ZM11 9.3q.55 0 .925-.375T12.3 8q0-.55-.375-.925T11 6.7q-.55 0-.925.375T9.7 8q0 .55.375.925T11 9.3Zm2.85.65ZM11 8Zm0 0Z"/>
    </Icon>
  );
});

IconMaterialBiotechW100.displayName = 'AmauiIconMaterialBiotechW100';

export default IconMaterialBiotechW100;
