import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDoneOutlineW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoneOutlineW100Filled'

      short_name='DoneOutline'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m9.525 17.075 9.65-9.65-.5-.5-9.15 9.15L5.3 11.85l-.5.5Zm0 .7q-.125 0-.263-.05-.137-.05-.237-.15L4.3 12.85q-.1-.1-.15-.237-.05-.138-.05-.263t.038-.263q.037-.137.162-.237l.5-.5q.1-.1.238-.15.137-.05.262-.05t.262.05q.138.05.238.15l3.725 3.725L18.2 6.4q.1-.1.238-.162.137-.063.262-.063t.262.05q.138.05.238.15l.5.525q.1.1.15.237.05.138.05.263t-.05.262q-.05.138-.15.238l-9.675 9.675q-.1.1-.237.15-.138.05-.263.05Z"/>
    </Icon>
  );
});

IconMaterialDoneOutlineW100Filled.displayName = 'AmauiIconMaterialDoneOutlineW100Filled';

export default IconMaterialDoneOutlineW100Filled;
