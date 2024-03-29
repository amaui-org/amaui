import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSouthFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SouthFilled'

      short_name='South'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 21.575q-.2 0-.375-.063-.175-.062-.325-.212l-5.6-5.6q-.275-.275-.275-.688 0-.412.275-.712.3-.3.712-.3.413 0 .713.3L11 18.175V3q0-.425.288-.713Q11.575 2 12 2t.713.287Q13 2.575 13 3v15.175l3.9-3.875q.275-.275.687-.288Q18 14 18.3 14.3q.275.275.275.7 0 .425-.275.7l-5.6 5.6q-.15.15-.325.212-.175.063-.375.063Z"/>
    </Icon>
  );
});

IconMaterialSouthFilled.displayName = 'AmauiIconMaterialSouthFilled';

export default IconMaterialSouthFilled;
