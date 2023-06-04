import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTrolleyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TrolleyW100Filled'

      short_name='Trolley'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.3 17V5H2.65v-.7H6v12h15v.7Zm1.275 3.55q-.55 0-.925-.375t-.375-.925q0-.55.375-.925t.925-.375q.55 0 .925.375t.375.925q0 .55-.375.925t-.925.375ZM8 14.3v-4h4v4Zm7 0v-4h4v4Zm4.675 6.25q-.55 0-.912-.375-.363-.375-.363-.925t.363-.925q.362-.375.912-.375t.938.375q.387.375.387.925t-.387.925q-.388.375-.938.375Z"/>
    </Icon>
  );
});

IconMaterialTrolleyW100Filled.displayName = 'AmauiIconMaterialTrolleyW100Filled';

export default IconMaterialTrolleyW100Filled;
