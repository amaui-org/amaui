import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialContentPasteSearch = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContentPasteSearch'

      short_name='ContentPasteSearch'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 21q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h4.175q.275-.875 1.075-1.438Q11.05 1 12 1q1 0 1.788.562.787.563 1.062 1.438H19q.825 0 1.413.587Q21 4.175 21 5v5h-2V5h-2v1q0 .825-.587 1.412Q15.825 8 15 8H9q-.825 0-1.412-.588Q7 6.825 7 6V5H5v14h5v2Zm15.9 1.3-2-2q-.525.3-1.125.5T16.5 21q-1.875 0-3.188-1.312Q12 18.375 12 16.5q0-1.875 1.312-3.188Q14.625 12 16.5 12q1.875 0 3.188 1.312Q21 14.625 21 16.5q0 .675-.2 1.275-.2.6-.5 1.125l2 2q.275.275.275.7 0 .425-.275.7-.275.275-.7.275-.425 0-.7-.275ZM16.5 19q1.05 0 1.775-.725Q19 17.55 19 16.5q0-1.05-.725-1.775Q17.55 14 16.5 14q-1.05 0-1.775.725Q14 15.45 14 16.5q0 1.05.725 1.775Q15.45 19 16.5 19ZM12 5q.425 0 .713-.288Q13 4.425 13 4t-.287-.713Q12.425 3 12 3t-.712.287Q11 3.575 11 4t.288.712Q11.575 5 12 5Z"/>
    </Icon>
  );
});

IconMaterialContentPasteSearch.displayName = 'AmauiIconMaterialContentPasteSearch';

export default IconMaterialContentPasteSearch;
