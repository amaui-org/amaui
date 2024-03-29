import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatClearFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatClearFilled'

      short_name='FormatClear'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m13.2 10.35-2.325-2.325L7.85 5H18.5q.625 0 1.062.438Q20 5.875 20 6.5t-.438 1.062Q19.125 8 18.5 8h-4.3Zm5.9 11.55-7.6-7.6-1.6 3.775q-.175.425-.562.675Q8.95 19 8.5 19q-.8 0-1.25-.675-.45-.675-.125-1.425L9.2 12 2.1 4.9q-.275-.275-.275-.7 0-.425.275-.7.275-.275.7-.275.425 0 .7.275l17 17q.275.275.275.7 0 .425-.275.7-.275.275-.7.275-.425 0-.7-.275Z"/>
    </Icon>
  );
});

IconMaterialFormatClearFilled.displayName = 'AmauiIconMaterialFormatClearFilled';

export default IconMaterialFormatClearFilled;
