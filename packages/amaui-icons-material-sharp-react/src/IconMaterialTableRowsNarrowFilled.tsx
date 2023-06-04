import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTableRowsNarrowFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TableRowsNarrowFilled'

      short_name='TableRowsNarrow'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M120 716h720V616H120v100Zm0-180h720V436H120v100Zm0-180h720V256H120v100Zm720 580V216v720Zm-720-40h720V796H120v100Z"/>
    </Icon>
  );
});

IconMaterialTableRowsNarrowFilled.displayName = 'AmauiIconMaterialTableRowsNarrowFilled';

export default IconMaterialTableRowsNarrowFilled;
