import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFiberManualRecordFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FiberManualRecordFilled'

      short_name='FiberManualRecord'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 19q-2.925 0-4.962-2.038Q5 14.925 5 12t2.038-4.963Q9.075 5 12 5t4.962 2.037Q19 9.075 19 12q0 2.925-2.038 4.962Q14.925 19 12 19Z"/>
    </Icon>
  );
});

IconMaterialFiberManualRecordFilled.displayName = 'AmauiIconMaterialFiberManualRecordFilled';

export default IconMaterialFiberManualRecordFilled;
