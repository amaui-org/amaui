import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFreeCancellation = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FreeCancellation'

      short_name='FreeCancellation'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m15.85 21.8-2.15-2.15q-.275-.275-.275-.7 0-.425.275-.7.275-.275.7-.275.425 0 .7.275l1.425 1.425 3.55-3.55q.275-.275.688-.275.412 0 .712.3.275.3.275.7 0 .4-.275.7L17.25 21.8q-.275.275-.7.275-.425 0-.7-.275ZM9 15.4l-.9.9q-.275.275-.7.275-.425 0-.7-.275-.275-.275-.275-.7 0-.425.275-.7l.9-.9-.9-.9q-.275-.275-.275-.7 0-.425.275-.7.275-.275.7-.275.425 0 .7.275l.9.9.9-.9q.275-.275.7-.275.425 0 .7.275.275.275.275.7 0 .425-.275.7l-.9.9.9.9q.275.275.275.7 0 .425-.275.7-.275.275-.7.275-.425 0-.7-.275ZM5 22q-.825 0-1.413-.587Q3 20.825 3 20V6q0-.825.587-1.412Q4.175 4 5 4h1V3q0-.425.287-.713Q6.575 2 7 2t.713.287Q8 2.575 8 3v1h8V3q0-.425.288-.713Q16.575 2 17 2t.712.287Q18 2.575 18 3v1h1q.825 0 1.413.588Q21 5.175 21 6v6.35l-2 2.025V10H5v10h6.25l1.975 2ZM5 8h14V6H5Zm0 0V6v2Z"/>
    </Icon>
  );
});

IconMaterialFreeCancellation.displayName = 'AmauiIconMaterialFreeCancellation';

export default IconMaterialFreeCancellation;
