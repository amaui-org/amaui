import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFamilyHistoryFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FamilyHistoryFilled'

      short_name='FamilyHistory'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 22.5q-1.575 0-2.662-1.087Q8.25 20.325 8.25 18.75q0-1.3.775-2.288.775-.987 1.975-1.337V13H7q-.825 0-1.412-.588Q5 11.825 5 11V9H3.5q-.425 0-.712-.288Q2.5 8.425 2.5 8V3q0-.425.288-.713Q3.075 2 3.5 2h5q.425 0 .713.287.287.288.287.713v5q0 .425-.287.712Q8.925 9 8.5 9H7v2h10V8.875q-1.2-.35-1.975-1.338-.775-.987-.775-2.287 0-1.575 1.088-2.663Q16.425 1.5 18 1.5t2.663 1.087Q21.75 3.675 21.75 5.25q0 1.3-.775 2.287Q20.2 8.525 19 8.875V11q0 .825-.587 1.412Q17.825 13 17 13h-4v2.125q1.2.35 1.975 1.337.775.988.775 2.288 0 1.575-1.087 2.663Q13.575 22.5 12 22.5Z"/>
    </Icon>
  );
});

IconMaterialFamilyHistoryFilled.displayName = 'AmauiIconMaterialFamilyHistoryFilled';

export default IconMaterialFamilyHistoryFilled;
