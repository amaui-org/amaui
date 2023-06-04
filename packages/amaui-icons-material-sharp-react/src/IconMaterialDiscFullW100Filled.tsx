import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDiscFullW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DiscFullW100Filled'

      short_name='DiscFull'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.6 15.2q1.35 0 2.275-.925.925-.925.925-2.275 0-1.35-.925-2.275Q12.95 8.8 11.6 8.8q-1.35 0-2.275.925Q8.4 10.65 8.4 12q0 1.35.925 2.275.925.925 2.275.925Zm0-2.2q-.425 0-.712-.288-.288-.287-.288-.712t.288-.713Q11.175 11 11.6 11t.712.287q.288.288.288.713t-.288.712Q12.025 13 11.6 13Zm0 7.7q-1.8 0-3.387-.688-1.588-.687-2.763-1.862-1.175-1.175-1.862-2.763Q2.9 13.8 2.9 12t.688-3.388Q4.275 7.025 5.45 5.85t2.763-1.863Q9.8 3.3 11.6 3.3q2.65 0 4.838 1.45 2.187 1.45 3.212 3.9h-1.4v8.95q-1.275 1.45-3 2.275t-3.65.825Zm8.65-2.7v-7.35h.7V18Zm.35 2.25q-.2 0-.35-.15-.15-.15-.15-.35 0-.225.15-.363.15-.137.35-.137.225 0 .363.137.137.138.137.363 0 .2-.137.35-.138.15-.363.15Z"/>
    </Icon>
  );
});

IconMaterialDiscFullW100Filled.displayName = 'AmauiIconMaterialDiscFullW100Filled';

export default IconMaterialDiscFullW100Filled;
