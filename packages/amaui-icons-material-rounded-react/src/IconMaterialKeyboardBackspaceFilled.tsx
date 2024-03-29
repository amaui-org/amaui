import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeyboardBackspaceFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardBackspaceFilled'

      short_name='KeyboardBackspace'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m8.3 17.3-4.6-4.6q-.15-.15-.212-.325-.063-.175-.063-.375t.063-.375q.062-.175.212-.325l4.625-4.625Q8.6 6.4 9 6.4t.7.3q.275.275.275.7 0 .425-.275.7L6.8 11H20q.425 0 .712.287.288.288.288.713t-.288.712Q20.425 13 20 13H6.8l2.925 2.925Q10 16.2 10 16.6t-.3.7q-.275.275-.7.275-.425 0-.7-.275Z"/>
    </Icon>
  );
});

IconMaterialKeyboardBackspaceFilled.displayName = 'AmauiIconMaterialKeyboardBackspaceFilled';

export default IconMaterialKeyboardBackspaceFilled;
