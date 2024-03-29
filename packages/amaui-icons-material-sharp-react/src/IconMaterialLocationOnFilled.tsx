import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLocationOnFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocationOnFilled'

      short_name='LocationOn'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 12q.825 0 1.413-.588Q14 10.825 14 10t-.587-1.413Q12.825 8 12 8q-.825 0-1.412.587Q10 9.175 10 10q0 .825.588 1.412Q11.175 12 12 12Zm0 10q-4.025-3.425-6.012-6.363Q4 12.7 4 10.2q0-3.75 2.413-5.975Q8.825 2 12 2t5.587 2.225Q20 6.45 20 10.2q0 2.5-1.987 5.437Q16.025 18.575 12 22Z"/>
    </Icon>
  );
});

IconMaterialLocationOnFilled.displayName = 'AmauiIconMaterialLocationOnFilled';

export default IconMaterialLocationOnFilled;
