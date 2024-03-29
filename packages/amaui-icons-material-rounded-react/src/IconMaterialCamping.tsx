import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCamping = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Camping'

      short_name='Camping'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 21v-3q0-.325.1-.625t.3-.575l8.35-11.25L9.6 4q-.125-.175-.175-.363-.05-.187-.025-.375.025-.187.125-.362t.275-.3q.35-.25.75-.2.4.05.65.4l.8 1.075.8-1.075q.25-.35.65-.4.4-.05.75.2t.4.65q.05.4-.2.75l-1.15 1.55L21.6 16.8q.2.275.3.575.1.3.1.625v3q0 .425-.288.712Q21.425 22 21 22H3q-.425 0-.712-.288Q2 21.425 2 21ZM12 7.225 4 18v2h3l4.175-5.85q.3-.425.825-.425.525 0 .825.425L17 20h3v-2ZM9.45 20h5.1L12 16.45Zm3.375-5.85L17 20l-4.175-5.85q-.3-.425-.825-.425-.525 0-.825.425L7 20l4.175-5.85q.3-.425.825-.425.525 0 .825.425Z"/>
    </Icon>
  );
});

IconMaterialCamping.displayName = 'AmauiIconMaterialCamping';

export default IconMaterialCamping;
