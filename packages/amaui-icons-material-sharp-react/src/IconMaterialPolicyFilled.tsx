import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPolicyFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PolicyFilled'

      short_name='Policy'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 14q.825 0 1.413-.588Q14 12.825 14 12t-.587-1.413Q12.825 10 12 10q-.825 0-1.412.587Q10 11.175 10 12q0 .825.588 1.412Q11.175 14 12 14Zm0 8q-3.475-.875-5.737-3.988Q4 14.9 4 11.1V5l8-3 8 3v6.1q0 1.625-.425 3.1T18.4 17l-2.95-2.95q.275-.475.413-.988Q16 12.55 16 12q0-1.65-1.175-2.825Q13.65 8 12 8q-1.65 0-2.825 1.175Q8 10.35 8 12q0 1.65 1.175 2.825Q10.35 16 12 16q.525 0 1.038-.137.512-.138.962-.413l3.225 3.225q-1.075 1.2-2.337 2.05Q13.625 21.575 12 22Z"/>
    </Icon>
  );
});

IconMaterialPolicyFilled.displayName = 'AmauiIconMaterialPolicyFilled';

export default IconMaterialPolicyFilled;
