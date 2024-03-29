import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVerticalAlignCenter = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VerticalAlignCenter'

      short_name='VerticalAlignCenter'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 22q-.425 0-.712-.288Q11 21.425 11 21v-3.2l-.925.925Q9.8 19 9.4 19t-.7-.3q-.275-.275-.275-.7 0-.425.275-.7l2.6-2.6q.15-.15.325-.213.175-.062.375-.062t.375.062q.175.063.325.213l2.625 2.625q.275.275.275.675t-.3.7q-.275.275-.7.275-.425 0-.7-.275l-.9-.9V21q0 .425-.287.712Q12.425 22 12 22Zm-7-9q-.425 0-.713-.288Q4 12.425 4 12t.287-.713Q4.575 11 5 11h14q.425 0 .712.287.288.288.288.713t-.288.712Q19.425 13 19 13Zm7-3.425q-.2 0-.375-.063-.175-.062-.325-.212L8.675 6.675Q8.4 6.4 8.4 6t.3-.7q.275-.275.7-.275.425 0 .7.275l.9.9V3q0-.425.288-.713Q11.575 2 12 2t.713.287Q13 2.575 13 3v3.2l.925-.925Q14.2 5 14.6 5t.7.3q.275.275.275.7 0 .425-.275.7l-2.6 2.6q-.15.15-.325.212-.175.063-.375.063Z"/>
    </Icon>
  );
});

IconMaterialVerticalAlignCenter.displayName = 'AmauiIconMaterialVerticalAlignCenter';

export default IconMaterialVerticalAlignCenter;
