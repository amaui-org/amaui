import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVrpano = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Vrpano'

      short_name='Vrpano'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.85 15.25q1.2-.125 2.488-.188Q10.625 15 12 15q1.35 0 2.638.062 1.287.063 2.512.188.425.05.588-.25.162-.3-.113-.65l-3.25-3.9q-.15-.175-.375-.175t-.375.175L11.15 13.4l-1.625-1.95q-.125-.175-.362-.175-.238 0-.388.2l-2.4 2.875q-.275.35-.125.65.15.3.6.25ZM3 20q-.425 0-.712-.288Q2 19.425 2 19V5q0-.425.288-.713Q2.575 4 3 4t2.725.75q2.3.75 6.275.75 4 0 6.288-.75Q20.575 4 21 4q.425 0 .712.287Q22 4.575 22 5v14q0 .425-.288.712Q21.425 20 21 20t-2.712-.75Q16 18.5 12 18.5q-3.975 0-6.275.75Q3.425 20 3 20Zm1-2.35q1.95-.575 3.963-.862Q9.975 16.5 12 16.5t4.038.288q2.012.287 3.962.862V6.375q-1.95.575-3.962.85Q14.025 7.5 12 7.5q-2.025 0-4.037-.275Q5.95 6.95 4 6.375ZM12 12Z"/>
    </Icon>
  );
});

IconMaterialVrpano.displayName = 'AmauiIconMaterialVrpano';

export default IconMaterialVrpano;
