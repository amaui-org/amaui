import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSignalWifiBad = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalWifiBad'

      short_name='SignalWifiBad'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 20.575q-.2 0-.375-.063-.175-.062-.325-.212L.7 9.7q-.3-.3-.287-.713.012-.412.312-.687Q3.05 6.2 5.95 5.1 8.85 4 12 4t6.05 1.1q2.9 1.1 5.225 3.2.3.275.313.687.012.413-.288.713L21 12h-7q-.825 0-1.412.587Q12 13.175 12 14Zm2.7-.275q-.275-.275-.275-.7 0-.425.275-.7l1.4-1.4-1.4-1.4q-.275-.275-.275-.7 0-.425.275-.7.275-.275.7-.275.425 0 .7.275l1.4 1.4 1.4-1.4q.275-.275.7-.275.425 0 .7.275.275.275.275.7 0 .425-.275.7l-1.4 1.4 1.4 1.4q.275.275.275.7 0 .425-.275.7-.275.275-.7.275-.425 0-.7-.275l-1.4-1.4-1.4 1.4q-.275.275-.7.275-.425 0-.7-.275Z"/>
    </Icon>
  );
});

IconMaterialSignalWifiBad.displayName = 'AmauiIconMaterialSignalWifiBad';

export default IconMaterialSignalWifiBad;
