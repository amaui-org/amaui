import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSwapVerticalCircleFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwapVerticalCircleFilled'

      short_name='SwapVerticalCircle'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14 11q-.425 0-.712.287Q13 11.575 13 12v3.15l-.9-.875Q11.8 14 11.4 14q-.4 0-.7.3-.275.275-.275.7 0 .425.275.7l2.6 2.6q.275.275.7.275.425 0 .7-.275l2.625-2.625Q17.6 15.4 17.6 15t-.3-.7q-.275-.275-.7-.288-.425-.012-.7.288l-.9.85v-3.175q0-.425-.287-.7Q14.425 11 14 11Zm-4 2q.425 0 .713-.288Q11 12.425 11 12V8.85l.9.875q.3.275.7.275.4 0 .7-.3.275-.275.275-.7 0-.425-.275-.7l-2.6-2.6q-.275-.275-.7-.275-.425 0-.7.275L6.675 8.325Q6.4 8.6 6.4 9t.3.7q.275.275.7.288.425.012.7-.288l.9-.85v3.175q0 .425.288.7Q9.575 13 10 13Zm2 9q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 22 12 22Z"/>
    </Icon>
  );
});

IconMaterialSwapVerticalCircleFilled.displayName = 'AmauiIconMaterialSwapVerticalCircleFilled';

export default IconMaterialSwapVerticalCircleFilled;
