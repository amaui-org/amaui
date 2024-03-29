import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialClosedCaptionDisabled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ClosedCaptionDisabled'

      short_name='ClosedCaptionDisabled'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.875 4H19q.825 0 1.413.588Q21 5.175 21 6v12.125l-2-2V6H8.875Zm9.625 9.5q0-.2.15-.35.15-.15.35-.15h.5q.2 0 .35.15.15.15.15.35v.5q0 .225-.087.438-.088.212-.263.337L16.375 13.5ZM14 9h3q.425 0 .712.287Q18 9.575 18 10v.625q0 .2-.15.35-.15.15-.35.15H17q-.2 0-.35-.15-.15-.15-.15-.35V10.5h-2v1.125l-1.5-1.5V10q0-.425.288-.713Q13.575 9 14 9Zm-.05 2.05ZM10.1 12.9ZM9.025 9l1.5 1.5H7.5v3h2v-.125q0-.2.15-.35.15-.15.35-.15h.5q.2 0 .35.15.15.15.15.35V14q0 .425-.287.712Q10.425 15 10 15H7q-.425 0-.713-.288Q6 14.425 6 14v-4q0-.425.287-.713Q6.575 9 7 9ZM4.2 4.175 6.025 6H5v12h10.175L1.375 4.2q-.3-.3-.3-.713 0-.412.3-.712t.712-.3q.413 0 .713.3l18.4 18.4q.3.3.3.7 0 .4-.3.7-.3.3-.712.3-.413 0-.713-.3L17.175 20H5q-.825 0-1.413-.587Q3 18.825 3 18V6q0-.625.338-1.113.337-.487.862-.712Z"/>
    </Icon>
  );
});

IconMaterialClosedCaptionDisabled.displayName = 'AmauiIconMaterialClosedCaptionDisabled';

export default IconMaterialClosedCaptionDisabled;
