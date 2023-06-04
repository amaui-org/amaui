import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialViewColumn2W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewColumn2W100Filled'

      short_name='ViewColumn2'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15 19.7q-.65 0-1.075-.425-.425-.425-.425-1.075V5.8q0-.65.425-1.075Q14.35 4.3 15 4.3h2.4q.65 0 1.075.425.425.425.425 1.075v12.4q0 .65-.425 1.075-.425.425-1.075.425Zm-8.4 0q-.65 0-1.075-.425Q5.1 18.85 5.1 18.2V5.8q0-.65.425-1.075Q5.95 4.3 6.6 4.3H9q.65 0 1.075.425.425.425.425 1.075v12.4q0 .65-.425 1.075Q9.65 19.7 9 19.7Z"/>
    </Icon>
  );
});

IconMaterialViewColumn2W100Filled.displayName = 'AmauiIconMaterialViewColumn2W100Filled';

export default IconMaterialViewColumn2W100Filled;
