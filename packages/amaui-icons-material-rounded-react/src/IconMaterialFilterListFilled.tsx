import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFilterListFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterListFilled'

      short_name='FilterList'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 18q-.425 0-.712-.288Q10 17.425 10 17t.288-.712Q10.575 16 11 16h2q.425 0 .713.288.287.287.287.712t-.287.712Q13.425 18 13 18ZM4 8q-.425 0-.712-.287Q3 7.425 3 7t.288-.713Q3.575 6 4 6h16q.425 0 .712.287Q21 6.575 21 7t-.288.713Q20.425 8 20 8Zm3 5q-.425 0-.713-.288Q6 12.425 6 12t.287-.713Q6.575 11 7 11h10q.425 0 .712.287.288.288.288.713t-.288.712Q17.425 13 17 13Z"/>
    </Icon>
  );
});

IconMaterialFilterListFilled.displayName = 'AmauiIconMaterialFilterListFilled';

export default IconMaterialFilterListFilled;
