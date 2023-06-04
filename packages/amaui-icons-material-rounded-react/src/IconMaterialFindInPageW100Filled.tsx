import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFindInPageW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FindInPageW100Filled'

      short_name='FindInPage'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 15q.825 0 1.413-.588Q14 13.825 14 13t-.587-1.413Q12.825 11 12 11q-.825 0-1.412.587Q10 12.175 10 13q0 .825.588 1.412Q11.175 15 12 15Zm-5.2 5.7q-.65 0-1.075-.425Q5.3 19.85 5.3 19.2V4.8q0-.65.425-1.075Q6.15 3.3 6.8 3.3h6.9q.35 0 .638.137.287.138.512.413l3.5 4.175q.175.2.263.45.087.25.087.525v10.2l-4.55-4.55q.275-.375.412-.763.138-.387.138-.887 0-1.125-.787-1.913Q13.125 10.3 12 10.3t-1.912.787Q9.3 11.875 9.3 13t.788 1.912q.787.788 1.912.788.45 0 .838-.125.387-.125.812-.425l4.7 4.7q-.45.5-.9.675-.45.175-1.1.175Z"/>
    </Icon>
  );
});

IconMaterialFindInPageW100Filled.displayName = 'AmauiIconMaterialFindInPageW100Filled';

export default IconMaterialFindInPageW100Filled;
