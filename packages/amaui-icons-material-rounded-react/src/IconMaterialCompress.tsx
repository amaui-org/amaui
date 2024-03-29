import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCompress = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Compress'

      short_name='Compress'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 22q-.425 0-.712-.288Q11 21.425 11 21v-2.2l-.925.925Q9.8 20 9.4 20t-.7-.3q-.275-.275-.275-.7 0-.425.275-.7l2.6-2.6q.3-.3.7-.3.4 0 .7.3l2.625 2.625q.275.275.275.675t-.3.7q-.275.275-.687.275-.413 0-.713-.275l-.9-.85v2.175q0 .425-.287.7Q12.425 22 12 22Zm-7.025-8q-.425 0-.7-.288Q4 13.425 4 13t.287-.713Q4.575 12 5 12h14.025q.425 0 .7.287.275.288.275.713t-.288.712Q19.425 14 19 14Zm0-3q-.425 0-.7-.288Q4 10.425 4 10t.287-.713Q4.575 9 5 9h14.025q.425 0 .7.287Q20 9.575 20 10t-.288.712Q19.425 11 19 11ZM11.3 7.3 8.675 4.675Q8.4 4.4 8.4 4t.3-.7q.275-.275.7-.275.425 0 .7.275l.9.9V1.975q0-.425.288-.7Q11.575 1 12 1t.713.287Q13 1.575 13 2v2.2l.925-.925Q14.2 3 14.6 3t.7.3q.275.275.275.7 0 .425-.275.7l-2.6 2.6q-.3.3-.7.3-.4 0-.7-.3Z"/>
    </Icon>
  );
});

IconMaterialCompress.displayName = 'AmauiIconMaterialCompress';

export default IconMaterialCompress;
