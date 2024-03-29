import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVerticalAlignBottom = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VerticalAlignBottom'

      short_name='VerticalAlignBottom'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 21q-.425 0-.713-.288Q4 20.425 4 20t.287-.712Q4.575 19 5 19h14q.425 0 .712.288.288.287.288.712t-.288.712Q19.425 21 19 21Zm7-4.425q-.2 0-.375-.063-.175-.062-.325-.212l-3.625-3.625Q7.4 12.4 7.4 12t.3-.7q.275-.275.7-.275.425 0 .7.275l1.9 1.9V4q0-.425.288-.713Q11.575 3 12 3t.713.287Q13 3.575 13 4v9.2l1.925-1.925Q15.2 11 15.6 11t.7.3q.275.275.275.7 0 .425-.275.7l-3.6 3.6q-.15.15-.325.212-.175.063-.375.063Z"/>
    </Icon>
  );
});

IconMaterialVerticalAlignBottom.displayName = 'AmauiIconMaterialVerticalAlignBottom';

export default IconMaterialVerticalAlignBottom;
