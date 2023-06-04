import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHdrOffSelectW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HdrOffSelectW100Filled'

      short_name='HdrOffSelect'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m16.425 9.6-6-6.025q.35-.125.75-.2.4-.075.825-.075 1.95 0 3.325 1.375Q16.7 6.05 16.7 8q0 .375-.063.8-.062.425-.212.8Zm.025 3.85-1.675-1.675q-.55.425-1.237.675-.688.25-1.538.25-1.95 0-3.325-1.375Q7.3 9.95 7.3 8q0-.75.225-1.475.225-.725.7-1.3L6.5 3.55 7 3l9.95 9.95Zm4.45 8.15v-2h-2v-.7h2v-2h.7v2h2v.7h-2v2Zm-7.5 0v-5.2h2.7q.65 0 1.075.425.425.425.425 1.075v.2q0 .425-.25.838-.25.412-.85.612l.9 2.05h-.75l-.9-2H14.1v2Zm.7-2.7h2q.3 0 .55-.25.25-.25.25-.55v-.2q0-.3-.25-.55-.25-.25-.55-.25h-2ZM.4 21.6v-5.2h.7v2h2.8v-2h.7v5.2h-.7v-2.5H1.1v2.5Zm6.5 0v-5.2h2.7q.6 0 1.05.45.45.45.45 1.05v2.2q0 .6-.45 1.05-.45.45-1.05.45Zm.7-.7h2q.3 0 .55-.25.25-.25.25-.55v-2.2q0-.3-.25-.55-.25-.25-.55-.25h-2Z"/>
    </Icon>
  );
});

IconMaterialHdrOffSelectW100Filled.displayName = 'AmauiIconMaterialHdrOffSelectW100Filled';

export default IconMaterialHdrOffSelectW100Filled;
