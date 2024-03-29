import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLastPageFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LastPageFilled'

      short_name='LastPage'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.3 17.3q-.275-.275-.275-.7 0-.425.275-.7l3.9-3.9-3.9-3.9q-.275-.275-.275-.7 0-.425.275-.7.275-.275.7-.275.425 0 .7.275l4.6 4.6q.15.15.213.325.062.175.062.375t-.062.375q-.063.175-.213.325l-4.6 4.6q-.275.275-.7.275-.425 0-.7-.275ZM17 18q-.425 0-.712-.288Q16 17.425 16 17V7q0-.425.288-.713Q16.575 6 17 6t.712.287Q18 6.575 18 7v10q0 .425-.288.712Q17.425 18 17 18Z"/>
    </Icon>
  );
});

IconMaterialLastPageFilled.displayName = 'AmauiIconMaterialLastPageFilled';

export default IconMaterialLastPageFilled;
