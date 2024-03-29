import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFilterListOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterListOff'

      short_name='FilterListOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m10.825 8-2-2H20q.425 0 .712.287Q21 6.575 21 7t-.288.713Q20.425 8 20 8Zm5 5-2-2H17q.425 0 .712.287.288.288.288.713t-.288.712Q17.425 13 17 13ZM13 18h-2q-.425 0-.712-.288Q10 17.425 10 17t.288-.712Q10.575 16 11 16h2q.425 0 .713.288.287.287.287.712t-.287.712Q13.425 18 13 18Zm6.075 3.9L10.15 13H7q-.425 0-.713-.288Q6 12.425 6 12t.287-.713Q6.575 11 7 11h1.15L2.075 4.925q-.3-.3-.3-.713 0-.412.3-.712t.713-.3q.412 0 .712.3l17 17q.3.3.3.7 0 .4-.3.7-.3.3-.712.3-.413 0-.713-.3ZM5.15 6v2H4q-.425 0-.712-.287Q3 7.425 3 7t.288-.713Q3.575 6 4 6Z"/>
    </Icon>
  );
});

IconMaterialFilterListOff.displayName = 'AmauiIconMaterialFilterListOff';

export default IconMaterialFilterListOff;
