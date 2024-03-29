import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWaterEc = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterEc'

      short_name='WaterEc'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 14v3.85q0 .375.363.475.362.1.562-.2l3.55-5.35q.175-.25.037-.513-.137-.262-.437-.262H13V8.15q0-.375-.363-.475-.362-.1-.562.2l-3.55 5.35q-.175.25-.037.513.137.262.437.262Zm1 8q-3.175 0-5.587-2.212Q4 17.575 4 13.8q0-2.375 1.8-5.15 1.8-2.775 5.45-6 .15-.125.35-.2.2-.075.4-.075t.4.075q.2.075.35.2 3.65 3.225 5.45 6Q20 11.425 20 13.8q0 3.775-2.413 5.988Q15.175 22 12 22Zm0-2q2.525 0 4.262-1.725Q18 16.55 18 13.8q0-1.775-1.475-4.063Q15.05 7.45 12 4.65q-3.05 2.8-4.525 5.087Q6 12.025 6 13.8q0 2.75 1.737 4.475Q9.475 20 12 20Zm0-6.2Z"/>
    </Icon>
  );
});

IconMaterialWaterEc.displayName = 'AmauiIconMaterialWaterEc';

export default IconMaterialWaterEc;
