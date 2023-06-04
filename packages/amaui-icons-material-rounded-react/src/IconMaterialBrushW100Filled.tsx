import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBrushW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrushW100Filled'

      short_name='Brush'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.5 19.2q-.425 0-.85-.1t-.8-.3q.45-.425.7-.988.25-.562.25-1.312 0-.725.488-1.213.487-.487 1.212-.487t1.213.487q.487.488.487 1.213 0 1.125-.787 1.913-.788.787-1.913.787Zm4.6-4.85-1.4-1.4L17.65 5q.275-.275.687-.288.413-.012.713.288t.3.7q0 .4-.3.7Z"/>
    </Icon>
  );
});

IconMaterialBrushW100Filled.displayName = 'AmauiIconMaterialBrushW100Filled';

export default IconMaterialBrushW100Filled;
