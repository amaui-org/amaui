import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFindInPageW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FindInPageW100'

      short_name='FindInPage'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 15q.825 0 1.413-.588Q14 13.825 14 13t-.587-1.413Q12.825 11 12 11q-.825 0-1.412.587Q10 12.175 10 13q0 .825.588 1.412Q11.175 15 12 15Zm-6 5h11.95v-.55l-4.3-4.3q-.425.3-.812.425-.388.125-.838.125-1.125 0-1.912-.788Q9.3 14.125 9.3 13t.788-1.913Q10.875 10.3 12 10.3t1.913.787q.787.788.787 1.913 0 .5-.138.887-.137.388-.412.763l3.85 3.9V8.7L14.05 4H6Zm-.7.7V3.3h9.1l4.3 5.15V20.7Zm7.05-8.6Z"/>
    </Icon>
  );
});

IconMaterialFindInPageW100.displayName = 'AmauiIconMaterialFindInPageW100';

export default IconMaterialFindInPageW100;
