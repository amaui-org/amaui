import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTourW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TourW100'

      short_name='Tour'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.65 21.35V2.65h.7v2h13.7L18.3 9l1.75 4.35H6.35v8Zm.7-16v7.3Zm6.15 5q.575 0 .963-.388.387-.387.387-.962t-.387-.963q-.388-.387-.963-.387t-.962.387q-.388.388-.388.963t.388.962q.387.388.962.388Zm-6.15 2.3H19L17.55 9 19 5.35H6.35Z"/>
    </Icon>
  );
});

IconMaterialTourW100.displayName = 'AmauiIconMaterialTourW100';

export default IconMaterialTourW100;
