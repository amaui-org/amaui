import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeyOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyOffW100'

      short_name='KeyOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19.85 20.85 12.7 13.7h-1.3q-.5 1.35-1.7 2.175-1.2.825-2.7.825-1.95 0-3.325-1.375Q2.3 13.95 2.3 12q0-1.775 1.15-3.1 1.15-1.325 2.9-1.55l-3.2-3.2.5-.5 16.7 16.7Zm.875-10.55 1.7 1.7-2.8 2.75L18 13.525l-.95.7-.5-.5 1.475-1.05L19.6 13.85 21.45 12l-1-1h-6.625l-.7-.7ZM7 16q1.275 0 2.375-.788 1.1-.787 1.475-2.212H12l-1.325-1.325L9.5 10.5 8.325 9.325 7 8Q5.175 8 4.088 9.262 3 10.525 3 12q0 1.65 1.175 2.825Q5.35 16 7 16Zm0-3q-.425 0-.713-.288Q6 12.425 6 12t.287-.713Q6.575 11 7 11t.713.287Q8 11.575 8 12t-.287.712Q7.425 13 7 13Z"/>
    </Icon>
  );
});

IconMaterialKeyOffW100.displayName = 'AmauiIconMaterialKeyOffW100';

export default IconMaterialKeyOffW100;
