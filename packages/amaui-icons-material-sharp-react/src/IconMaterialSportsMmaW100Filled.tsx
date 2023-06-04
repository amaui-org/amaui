import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSportsMmaW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SportsMmaW100Filled'

      short_name='SportsMma'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.3 19.2v-3h7.5v3Zm-.95-4.5-.7-3.5q-.05-.125-.05-.2V5.6q0-.65.425-1.075Q7.45 4.1 8.1 4.1h6.4q.65 0 1.075.425Q16 4.95 16 5.6v1.6q0-.3.2-.5t.5-.2q.3 0 .5.2t.2.5v3.75q0 .075-.05.2l-.75 3.55Zm1.95-5h4V8.3h-4Z"/>
    </Icon>
  );
});

IconMaterialSportsMmaW100Filled.displayName = 'AmauiIconMaterialSportsMmaW100Filled';

export default IconMaterialSportsMmaW100Filled;
