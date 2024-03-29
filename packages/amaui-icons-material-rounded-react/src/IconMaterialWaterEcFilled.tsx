import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWaterEcFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterEcFilled'

      short_name='WaterEc'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 14v3.85q0 .375.363.475.362.1.562-.2l3.55-5.35q.175-.25.037-.513-.137-.262-.437-.262H13V8.15q0-.375-.363-.475-.362-.1-.562.2l-3.55 5.35q-.175.25-.037.513.137.262.437.262Zm1 8q-3.175 0-5.587-2.212Q4 17.575 4 13.8q0-2.375 1.8-5.15 1.8-2.775 5.45-6 .15-.125.35-.2.2-.075.4-.075t.4.075q.2.075.35.2 3.65 3.225 5.45 6Q20 11.425 20 13.8q0 3.775-2.413 5.988Q15.175 22 12 22Z"/>
    </Icon>
  );
});

IconMaterialWaterEcFilled.displayName = 'AmauiIconMaterialWaterEcFilled';

export default IconMaterialWaterEcFilled;
