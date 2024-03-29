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
      <path d="M12 22.5q-1.575 0-2.662-1.087Q8.25 20.325 8.25 18.75q0-1.3.775-2.288.775-.987 1.975-1.337V13H5V9H2.5V2h7v7H7v2h10V8.875q-1.2-.35-1.975-1.338-.775-.987-.775-2.287 0-1.575 1.088-2.663Q16.425 1.5 18 1.5t2.663 1.087Q21.75 3.675 21.75 5.25q0 1.3-.775 2.287Q20.2 8.525 19 8.875V13h-6v2.125q1.2.35 1.975 1.337.775.988.775 2.288 0 1.575-1.087 2.663Q13.575 22.5 12 22.5Z"/>
    </Icon>
  );
});

IconMaterialFamilyHistoryFilled.displayName = 'AmauiIconMaterialFamilyHistoryFilled';

export default IconMaterialFamilyHistoryFilled;
