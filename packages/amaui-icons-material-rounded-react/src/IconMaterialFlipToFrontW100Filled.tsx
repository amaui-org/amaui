import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFlipToFrontW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlipToFrontW100Filled'

      short_name='FlipToFront'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 19.7q-.3 0-.5-.2t-.2-.5H5ZM4.3 17v-2H5v2Zm0-4v-2H5v2Zm0-4V7H5v2ZM7 19.7V19h2v.7Zm2.8-4q-.65 0-1.075-.425Q8.3 14.85 8.3 14.2V5.8q0-.65.425-1.075Q9.15 4.3 9.8 4.3h8.4q.65 0 1.075.425.425.425.425 1.075v8.4q0 .65-.425 1.075-.425.425-1.075.425Zm0-.7h8.4q.3 0 .55-.25.25-.25.25-.55V5.8q0-.3-.25-.55Q18.5 5 18.2 5H9.8q-.3 0-.55.25Q9 5.5 9 5.8v8.4q0 .3.25.55.25.25.55.25Zm1.2 4.7V19h2v.7Zm4 0V19h2v.7Z"/>
    </Icon>
  );
});

IconMaterialFlipToFrontW100Filled.displayName = 'AmauiIconMaterialFlipToFrontW100Filled';

export default IconMaterialFlipToFrontW100Filled;
