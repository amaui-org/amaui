import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMotionModeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MotionModeW100'

      short_name='MotionMode'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.35 5.425v13.15q-.65-.65-1.15-1.412-.5-.763-.85-1.613v-7.1q.35-.85.85-1.613.5-.762 1.15-1.412Zm3.7-2.3v17.75q-.825-.275-1.587-.687-.763-.413-1.413-.963V4.775q.65-.55 1.413-.963.762-.412 1.587-.687Zm5.4 17.9V2.975q3 .8 4.95 3.275 1.95 2.475 1.95 5.75t-1.95 5.75q-1.95 2.475-4.95 3.275ZM12 21.35q-.575 0-1.137-.075-.563-.075-1.113-.2V2.925q.55-.125 1.113-.2.562-.075 1.137-.075.45 0 .888.05.437.05.862.125v18.35q-.425.075-.862.125-.438.05-.888.05Z"/>
    </Icon>
  );
});

IconMaterialMotionModeW100.displayName = 'AmauiIconMaterialMotionModeW100';

export default IconMaterialMotionModeW100;
