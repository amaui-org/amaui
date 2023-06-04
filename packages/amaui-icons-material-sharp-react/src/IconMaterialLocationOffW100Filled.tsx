import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLocationOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocationOffW100Filled'

      short_name='LocationOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m21.3 22.3-5.125-5.125q-.825 1.05-1.863 2.125-1.037 1.075-2.312 2.2-3.725-3.35-5.537-6.213Q4.65 12.425 4.65 10.2q0-1.05.225-1.963.225-.912.65-1.712L2.25 3.25l.475-.525L21.8 21.8Zm-3.55-7.35-4.475-4.475q.05-.125.063-.237.012-.113.012-.238 0-.575-.387-.963-.388-.387-.963-.387-.125 0-.238.012-.112.013-.237.063L7.2 4.4q1-.85 2.225-1.3Q10.65 2.65 12 2.65q2.9 0 5.125 2.05t2.225 5.5q0 1.05-.4 2.225t-1.2 2.525Z"/>
    </Icon>
  );
});

IconMaterialLocationOffW100Filled.displayName = 'AmauiIconMaterialLocationOffW100Filled';

export default IconMaterialLocationOffW100Filled;
