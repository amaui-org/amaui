import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVolcanoFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VolcanoFilled'

      short_name='Volcano'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m3.25 19.2 2.225-5q.25-.55.738-.875Q6.7 13 7.3 13H9l1.5-3.75q.225-.575.725-.913Q11.725 8 12.35 8h4.15q.675 0 1.2.4.525.4.725 1.05l2.85 10q.275.95-.325 1.75-.6.8-1.6.8H5.075q-1.1 0-1.687-.9-.588-.9-.138-1.9ZM13 4V2q0-.425.288-.713Q13.575 1 14 1t.713.287Q15 1.575 15 2v2q0 .425-.287.712Q14.425 5 14 5t-.712-.288Q13 4.425 13 4Zm5.225 2.175q-.275.275-.7.275-.425 0-.7-.275-.275-.275-.275-.7 0-.425.275-.7l1.45-1.45q.275-.275.7-.275.425 0 .7.275.275.275.275.7 0 .425-.275.7Zm-8.45 0-1.45-1.45q-.275-.275-.263-.7.013-.425.288-.7.275-.275.7-.275.425 0 .7.275l1.425 1.45q.275.275.275.7 0 .425-.275.7-.275.275-.7.275-.425 0-.7-.275Z"/>
    </Icon>
  );
});

IconMaterialVolcanoFilled.displayName = 'AmauiIconMaterialVolcanoFilled';

export default IconMaterialVolcanoFilled;
