import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCinematicBlur = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CinematicBlur'

      short_name='CinematicBlur'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m4 3 2 4h3L7 3h2l2 4h3l-2-4h2l2 4h3l-2-4h5v18H2V3Zm0 6v10h16V9Zm0 0v10Zm4 9h8v-.55q0-1.1-1.1-1.775Q13.8 15 12 15q-1.8 0-2.9.675Q8 16.35 8 17.45Zm4-4q.825 0 1.413-.588Q14 12.825 14 12t-.587-1.413Q12.825 10 12 10q-.825 0-1.412.587Q10 11.175 10 12q0 .825.588 1.412Q11.175 14 12 14Z"/>
    </Icon>
  );
});

IconMaterialCinematicBlur.displayName = 'AmauiIconMaterialCinematicBlur';

export default IconMaterialCinematicBlur;
