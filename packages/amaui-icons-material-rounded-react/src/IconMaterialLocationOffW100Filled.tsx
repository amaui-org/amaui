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
      <path d="m17.75 14.95-4.475-4.475q.05-.125.063-.237.012-.113.012-.238 0-.575-.387-.963-.388-.387-.963-.387-.125 0-.238.012-.112.013-.237.063L7.2 4.4q1-.85 2.225-1.3Q10.65 2.65 12 2.65q2.9 0 5.125 2.05t2.225 5.5q0 1.05-.4 2.225t-1.2 2.525Zm-6.275 6.075q-3.45-3.2-5.137-5.938Q4.65 12.35 4.65 10.2q0-1.05.225-1.963.225-.912.65-1.712l-3.05-3.05q-.1-.1-.1-.225t.1-.25q.1-.125.25-.125T3 3l18.55 18.55q.125.125.125.25t-.125.25q-.125.125-.25.125t-.25-.125l-4.875-4.875q-.725.925-1.637 1.887-.913.963-2.013 1.963-.1.1-.237.138-.138.037-.288.037-.15 0-.275-.037-.125-.038-.25-.138Z"/>
    </Icon>
  );
});

IconMaterialLocationOffW100Filled.displayName = 'AmauiIconMaterialLocationOffW100Filled';

export default IconMaterialLocationOffW100Filled;
