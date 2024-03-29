import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArrowCircleUpFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowCircleUpFilled'

      short_name='ArrowCircleUp'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 16q.425 0 .713-.288Q13 15.425 13 15v-3.2l.9.9q.275.275.7.275.425 0 .7-.275.275-.275.275-.7 0-.425-.275-.7l-2.6-2.6q-.15-.15-.325-.213-.175-.062-.375-.062t-.375.062q-.175.063-.325.213l-2.6 2.6q-.275.275-.275.7 0 .425.275.7.275.275.7.275.425 0 .7-.275l.9-.9V15q0 .425.288.712.287.288.712.288Zm0 6q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 22 12 22Z"/>
    </Icon>
  );
});

IconMaterialArrowCircleUpFilled.displayName = 'AmauiIconMaterialArrowCircleUpFilled';

export default IconMaterialArrowCircleUpFilled;
