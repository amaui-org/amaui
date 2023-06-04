import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCinematicBlurW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CinematicBlurW100Filled'

      short_name='CinematicBlur'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.8 4.3 6.15 7h3L7.8 4.3h2L11.15 7h3L12.8 4.3h2L16.15 7h3L17.8 4.3h1.4q.65 0 1.075.425.425.425.425 1.075v12.4q0 .65-.425 1.075-.425.425-1.075.425H4.8q-.65 0-1.075-.425Q3.3 18.85 3.3 18.2V5.8q0-.65.425-1.075Q4.15 4.3 4.8 4.3Zm4.1 12.55h6.2v-.05q0-.7-.887-1.175-.888-.475-2.213-.475-1.325 0-2.212.475Q8.9 16.1 8.9 16.8Zm3.1-3.5q.575 0 .963-.388.387-.387.387-.962t-.387-.963q-.388-.387-.963-.387t-.962.387q-.388.388-.388.963t.388.962q.387.388.962.388Z"/>
    </Icon>
  );
});

IconMaterialCinematicBlurW100Filled.displayName = 'AmauiIconMaterialCinematicBlurW100Filled';

export default IconMaterialCinematicBlurW100Filled;
