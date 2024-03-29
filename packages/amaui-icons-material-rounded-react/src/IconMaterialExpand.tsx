import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialExpand = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Expand'

      short_name='Expand'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 22q-.425 0-.713-.288Q4 21.425 4 21t.287-.712Q4.575 20 5 20h14q.425 0 .712.288.288.287.288.712t-.288.712Q19.425 22 19 22ZM5 4q-.425 0-.713-.288Q4 3.425 4 3t.287-.713Q4.575 2 5 2h14q.425 0 .712.287Q20 2.575 20 3t-.288.712Q19.425 4 19 4Zm7 14.575q-.2 0-.375-.063-.175-.062-.325-.212l-2.625-2.625Q8.4 15.4 8.4 15t.3-.7q.275-.275.687-.275.413 0 .713.275l.9.85v-6.3l-.9.875Q9.8 10 9.4 10q-.4 0-.7-.3-.275-.275-.275-.7 0-.425.275-.7l2.6-2.6q.15-.15.325-.212.175-.063.375-.063t.375.063q.175.062.325.212l2.625 2.625Q15.6 8.6 15.6 9t-.3.7q-.275.275-.687.275-.413 0-.713-.275l-.9-.85v6.3l.9-.875q.3-.275.7-.275.4 0 .7.3.275.275.275.7 0 .425-.275.7l-2.6 2.6q-.15.15-.325.212-.175.063-.375.063Z"/>
    </Icon>
  );
});

IconMaterialExpand.displayName = 'AmauiIconMaterialExpand';

export default IconMaterialExpand;
