import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLocationDisabled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocationDisabled'

      short_name='LocationDisabled'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m19.6 16.85-1.45-1.45q.425-.75.638-1.6.212-.85.212-1.75 0-2.9-2.05-4.95Q14.9 5.05 12 5.05q-.9 0-1.75.212-.85.213-1.6.638L7.2 4.45q.875-.525 1.813-.875Q9.95 3.225 11 3.1v-2h2v2q3.125.35 5.363 2.588Q20.6 7.925 20.95 11.05h2v2h-2q-.125 1.05-.475 1.987-.35.938-.875 1.813ZM11 23v-2q-3.125-.35-5.362-2.587Q3.4 16.175 3.05 13.05h-2v-2h2q.125-1.05.475-1.988.35-.937.875-1.812l-3-3 1.4-1.4 18.4 18.4-1.45 1.4-2.95-3q-.875.525-1.812.875-.938.35-1.988.475v2Zm1-3.95q.9 0 1.75-.213.85-.212 1.6-.637l-9.5-9.5q-.425.75-.637 1.6Q5 11.15 5 12.05q0 2.9 2.05 4.95Q9.1 19.05 12 19.05Z"/>
    </Icon>
  );
});

IconMaterialLocationDisabled.displayName = 'AmauiIconMaterialLocationDisabled';

export default IconMaterialLocationDisabled;
