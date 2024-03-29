import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialReportOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReportOff'

      short_name='ReportOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m19.8 16.95-1.45-1.4.65-.65V9.1L14.9 5H9.1l-.65.65-1.4-1.45.625-.625q.275-.275.637-.425.363-.15.763-.15h5.85q.4 0 .763.15.362.15.637.425l4.1 4.1q.275.275.425.637.15.363.15.763V14.9q0 .4-.137.75-.138.35-.413.625ZM13 10.2V8q0-.425-.287-.713Q12.425 7 12 7t-.712.287Q11 7.575 11 8v.2ZM9.075 21q-.4 0-.763-.163-.362-.162-.637-.437l-4.1-4.125Q3.3 16 3.15 15.637 3 15.275 3 14.875v-5.8q0-.4.15-.763.15-.362.425-.637L4.2 7.05 1.375 4.175Q1.1 3.9 1.1 3.5t.3-.7q.275-.275.7-.275.425 0 .7.275l18.425 18.425q.275.275.275.675t-.3.7q-.275.275-.7.275-.425 0-.7-.275l-2.85-2.85-.6.625q-.275.275-.65.45t-.8.175ZM13.4 10.6ZM12 17q-.425 0-.712-.288Q11 16.425 11 16t.288-.713Q11.575 15 12 15t.713.287Q13 15.575 13 16t-.287.712Q12.425 17 12 17Zm-2.9 2h5.8l.65-.65-9.9-9.9L5 9.1v5.8Zm1.5-5.6Z"/>
    </Icon>
  );
});

IconMaterialReportOff.displayName = 'AmauiIconMaterialReportOff';

export default IconMaterialReportOff;
