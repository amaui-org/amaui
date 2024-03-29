import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMarkEmailReadFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MarkEmailReadFilled'

      short_name='MarkEmailRead'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15.95 21.575q-.2 0-.375-.063-.175-.062-.325-.212l-2.85-2.85q-.275-.275-.275-.7 0-.425.275-.7.275-.275.7-.275.425 0 .7.275l2.15 2.15 4.95-4.95q.275-.275.7-.275.425 0 .7.275.275.275.275.7 0 .425-.275.7l-5.65 5.65q-.15.15-.325.212-.175.063-.375.063Zm-4.475-8.9q.25.15.525.15t.525-.15l7-4.375q.2-.125.338-.388Q20 7.65 20 7.4q0-.475-.4-.687-.4-.213-.8.037L12 11 5.2 6.75q-.4-.25-.8-.025t-.4.7q0 .25.138.5.137.25.337.375ZM4 20q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4h16q.825 0 1.413.588Q22 5.175 22 6v5.525q-.425-.075-.9.062-.475.138-.85.513l-4.275 4.275-1.45-1.45q-.6-.6-1.425-.6-.825 0-1.425.6L10.3 16.3q-.6.6-.6 1.425 0 .825.6 1.425l.85.85Z"/>
    </Icon>
  );
});

IconMaterialMarkEmailReadFilled.displayName = 'AmauiIconMaterialMarkEmailReadFilled';

export default IconMaterialMarkEmailReadFilled;
