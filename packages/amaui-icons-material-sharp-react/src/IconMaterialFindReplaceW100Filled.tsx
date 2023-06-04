import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFindReplaceW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FindReplaceW100Filled'

      short_name='FindReplace'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.4 10q.3-2.025 1.938-3.363Q8.975 5.3 11 5.3q2.225 0 3.388 1.075Q15.55 7.45 16 8.25V5.3h.7V10H12v-.7h3.7q-.425-1.125-1.587-2.213Q12.95 6 11 6 9.2 6 7.825 7.137 6.45 8.275 6.1 10Zm14.2 10.15-4.85-4.85q-.825.725-1.762 1.062-.938.338-1.988.338-1.475 0-2.875-.775T6 13.75v2.95h-.7V12H10v.7H6.3q.5 1.425 1.788 2.362Q9.375 16 11 16q1.8 0 3.175-1.137Q15.55 13.725 15.9 12h.7q-.125.9-.45 1.512-.325.613-.9 1.288l4.85 4.85Z"/>
    </Icon>
  );
});

IconMaterialFindReplaceW100Filled.displayName = 'AmauiIconMaterialFindReplaceW100Filled';

export default IconMaterialFindReplaceW100Filled;
