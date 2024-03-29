import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOilBarrel = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OilBarrel'

      short_name='OilBarrel'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 21q-.425 0-.712-.288Q3 20.425 3 20t.288-.712Q3.575 19 4 19h1v-6H4q-.425 0-.712-.288Q3 12.425 3 12t.288-.713Q3.575 11 4 11h1V5H4q-.425 0-.712-.288Q3 4.425 3 4t.288-.713Q3.575 3 4 3h16q.425 0 .712.287Q21 3.575 21 4t-.288.712Q20.425 5 20 5h-1v6h1q.425 0 .712.287.288.288.288.713t-.288.712Q20.425 13 20 13h-1v6h1q.425 0 .712.288.288.287.288.712t-.288.712Q20.425 21 20 21Zm3-2h10v-6q-.425 0-.712-.288Q16 12.425 16 12t.288-.713Q16.575 11 17 11V5H7v6q.425 0 .713.287Q8 11.575 8 12t-.287.712Q7.425 13 7 13Zm5-3q1.25 0 2.125-.863.875-.862.875-2.087 0-.8-.337-1.35-.338-.55-1.388-1.75l-.525-.575q-.3-.35-.75-.35t-.75.35l-.5.575q-1.05 1.2-1.4 1.75-.35.55-.35 1.35 0 1.225.875 2.087Q10.75 16 12 16Zm-5 3V5v14Z"/>
    </Icon>
  );
});

IconMaterialOilBarrel.displayName = 'AmauiIconMaterialOilBarrel';

export default IconMaterialOilBarrel;
