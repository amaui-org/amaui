import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSystemUpdate = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SystemUpdate'

      short_name='SystemUpdate'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 15.575q-.2 0-.375-.063-.175-.062-.325-.212l-2.6-2.6q-.275-.275-.287-.688Q8.4 11.6 8.7 11.3q.275-.275.687-.288.413-.012.713.263l.9.875V9q0-.425.288-.713Q11.575 8 12 8t.713.287Q13 8.575 13 9v3.15l.9-.875q.275-.275.688-.275.412 0 .712.3.275.275.275.7 0 .425-.275.7l-2.6 2.6q-.15.15-.325.212-.175.063-.375.063ZM7 23q-.825 0-1.412-.587Q5 21.825 5 21V3q0-.825.588-1.413Q6.175 1 7 1h10q.825 0 1.413.587Q19 2.175 19 3v18q0 .825-.587 1.413Q17.825 23 17 23Zm0-5h10V6H7Zm0 2v1h10v-1ZM7 4h10V3H7Zm0-1v1-1Zm0 18v-1 1Z"/>
    </Icon>
  );
});

IconMaterialSystemUpdate.displayName = 'AmauiIconMaterialSystemUpdate';

export default IconMaterialSystemUpdate;
