import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBadgeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BadgeFilled'

      short_name='Badge'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17.25 13.5q.325 0 .538-.213.212-.212.212-.537 0-.325-.212-.538Q17.575 12 17.25 12h-2.5q-.325 0-.537.212-.213.213-.213.538 0 .325.213.537.212.213.537.213Zm0 3q.325 0 .538-.212.212-.213.212-.538 0-.325-.212-.538Q17.575 15 17.25 15h-2.5q-.325 0-.537.212-.213.213-.213.538 0 .325.213.538.212.212.537.212ZM15 7h5q.825 0 1.413.587Q22 8.175 22 9v11q0 .825-.587 1.413Q20.825 22 20 22H4q-.825 0-1.412-.587Q2 20.825 2 20V9q0-.825.588-1.413Q3.175 7 4 7h5V4q0-.825.588-1.413Q10.175 2 11 2h2q.825 0 1.413.587Q15 3.175 15 4Zm-4 2h2V4h-2Zm-2 6q.625 0 1.062-.438.438-.437.438-1.062t-.438-1.062Q9.625 12 9 12t-1.062.438Q7.5 12.875 7.5 13.5t.438 1.062Q8.375 15 9 15Zm-3 3h6v-.45q0-.425-.238-.788-.237-.362-.662-.562-.5-.225-1.012-.337Q9.575 15.75 9 15.75q-.575 0-1.087.113-.513.112-1.013.337-.425.2-.662.562Q6 17.125 6 17.55Z"/>
    </Icon>
  );
});

IconMaterialBadgeFilled.displayName = 'AmauiIconMaterialBadgeFilled';

export default IconMaterialBadgeFilled;
