import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGridGoldenratio = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GridGoldenratio'

      short_name='GridGoldenratio'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10 22q-.425 0-.712-.288Q9 21.425 9 21v-6H3q-.425 0-.712-.288Q2 14.425 2 14t.288-.713Q2.575 13 3 13h6v-2H3q-.425 0-.712-.288Q2 10.425 2 10t.288-.713Q2.575 9 3 9h6V3q0-.425.288-.713Q9.575 2 10 2t.713.287Q11 2.575 11 3v6h2V3q0-.425.288-.713Q13.575 2 14 2t.713.287Q15 2.575 15 3v6h6q.425 0 .712.287Q22 9.575 22 10t-.288.712Q21.425 11 21 11h-6v2h6q.425 0 .712.287.288.288.288.713t-.288.712Q21.425 15 21 15h-6v6q0 .425-.287.712Q14.425 22 14 22t-.712-.288Q13 21.425 13 21v-6h-2v6q0 .425-.287.712Q10.425 22 10 22Zm1-9h2v-2h-2Z"/>
    </Icon>
  );
});

IconMaterialGridGoldenratio.displayName = 'AmauiIconMaterialGridGoldenratio';

export default IconMaterialGridGoldenratio;
