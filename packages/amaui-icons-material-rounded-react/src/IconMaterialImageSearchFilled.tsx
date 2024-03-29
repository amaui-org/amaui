import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialImageSearchFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ImageSearchFilled'

      short_name='ImageSearch'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 21q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h5v2H5v14h14v-5.35l2 2V19q0 .825-.587 1.413Q19.825 21 19 21Zm15.85-8.3-2.4-2.4q-.525.35-1.125.525-.6.175-1.275.175-1.85 0-3.15-1.312-1.3-1.313-1.3-3.188 0-1.875 1.313-3.188Q14.225 2 16.1 2q1.875 0 3.188 1.312Q20.6 4.625 20.6 6.5q0 .675-.2 1.3t-.5 1.15l2.35 2.35q.275.275.275.7 0 .425-.275.7-.275.275-.7.275-.425 0-.7-.275ZM16.1 9q1.05 0 1.775-.725.725-.725.725-1.775 0-1.05-.725-1.775Q17.15 4 16.1 4q-1.05 0-1.775.725Q13.6 5.45 13.6 6.5q0 1.05.725 1.775Q15.05 9 16.1 9ZM7 17q-.3 0-.45-.275-.15-.275.05-.525l2-2.675q.15-.2.4-.2t.4.2L11.25 16l2.6-3.475q.15-.2.4-.2t.4.2L17.4 16.2q.2.25.05.525Q17.3 17 17 17Z"/>
    </Icon>
  );
});

IconMaterialImageSearchFilled.displayName = 'AmauiIconMaterialImageSearchFilled';

export default IconMaterialImageSearchFilled;
