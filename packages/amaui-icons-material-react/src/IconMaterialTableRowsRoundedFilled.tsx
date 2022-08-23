import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTableRowsRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TableRowsRoundedFilled'
      short_name='TableRows'

      {...props}
    >
      <path d="M21 6.625Q21 7.05 20.712 7.338Q20.425 7.625 20 7.625H4Q3.575 7.625 3.288 7.338Q3 7.05 3 6.625V4Q3 3.575 3.288 3.287Q3.575 3 4 3H20Q20.425 3 20.712 3.287Q21 3.575 21 4ZM21 13.35Q21 13.775 20.712 14.062Q20.425 14.35 20 14.35H4Q3.575 14.35 3.288 14.062Q3 13.775 3 13.35V10.625Q3 10.2 3.288 9.912Q3.575 9.625 4 9.625H20Q20.425 9.625 20.712 9.912Q21 10.2 21 10.625ZM21 20Q21 20.425 20.712 20.712Q20.425 21 20 21H4Q3.575 21 3.288 20.712Q3 20.425 3 20V17.35Q3 16.925 3.288 16.638Q3.575 16.35 4 16.35H20Q20.425 16.35 20.712 16.638Q21 16.925 21 17.35Z"/>
    </Icon>
  );
});

IconMaterialTableRowsRoundedFilled.displayName = 'AmauiIconMaterialTableRowsRoundedFilled';

export default IconMaterialTableRowsRoundedFilled;
