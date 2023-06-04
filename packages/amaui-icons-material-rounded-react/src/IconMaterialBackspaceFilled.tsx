import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBackspaceFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BackspaceFilled'

      short_name='Backspace'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.025 19q-.5 0-.937-.225-.438-.225-.713-.625l-3.525-5q-.375-.525-.375-1.15 0-.625.375-1.15l3.525-5q.275-.4.713-.625Q8.525 5 9.025 5h10q.825 0 1.413.588.587.587.587 1.412v10q0 .825-.587 1.413-.588.587-1.413.587Zm1.675-3.7q.275.275.7.275.425 0 .7-.275l1.9-1.9 1.9 1.9q.275.275.7.275.425 0 .7-.275.275-.275.275-.7 0-.425-.275-.7L15.4 12l1.9-1.9q.275-.275.275-.7 0-.425-.275-.7-.275-.275-.7-.275-.425 0-.7.275L14 10.6l-1.9-1.9q-.275-.275-.7-.275-.425 0-.7.275-.275.275-.275.7 0 .425.275.7l1.9 1.9-1.9 1.9q-.275.275-.275.7 0 .425.275.7Z"/>
    </Icon>
  );
});

IconMaterialBackspaceFilled.displayName = 'AmauiIconMaterialBackspaceFilled';

export default IconMaterialBackspaceFilled;
