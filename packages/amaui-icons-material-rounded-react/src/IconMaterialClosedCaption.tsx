import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialClosedCaption = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ClosedCaption'

      short_name='ClosedCaption'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 15h3q.425 0 .713-.288Q11 14.425 11 14v-.625q0-.2-.15-.35-.15-.15-.35-.15H10q-.2 0-.35.15-.15.15-.15.35v.125h-2v-3h2v.125q0 .2.15.35.15.15.35.15h.5q.2 0 .35-.15.15-.15.15-.35V10q0-.425-.287-.713Q10.425 9 10 9H7q-.425 0-.713.287Q6 9.575 6 10v4q0 .425.287.712Q6.575 15 7 15Zm7 0h3q.425 0 .712-.288Q18 14.425 18 14v-.625q0-.2-.15-.35-.15-.15-.35-.15H17q-.2 0-.35.15-.15.15-.15.35v.125h-2v-3h2v.125q0 .2.15.35.15.15.35.15h.5q.2 0 .35-.15.15-.15.15-.35V10q0-.425-.288-.713Q17.425 9 17 9h-3q-.425 0-.712.287Q13 9.575 13 10v4q0 .425.288.712.287.288.712.288ZM5 4h14q.825 0 1.413.588Q21 5.175 21 6v12q0 .825-.587 1.413Q19.825 20 19 20H5q-.825 0-1.413-.587Q3 18.825 3 18V6q0-.825.587-1.412Q4.175 4 5 4Zm14 2H5v12h14V6ZM5 18V6v12Z"/>
    </Icon>
  );
});

IconMaterialClosedCaption.displayName = 'AmauiIconMaterialClosedCaption';

export default IconMaterialClosedCaption;
