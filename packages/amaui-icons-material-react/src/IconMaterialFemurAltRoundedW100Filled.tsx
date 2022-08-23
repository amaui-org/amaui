import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFemurAltRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FemurAltRoundedW100Filled'
      short_name='FemurAlt'

      {...props}
    >
      <path d="M11.225 22q-.6-1.35-.775-2.763-.175-1.412-.15-2.6.025-1.187.125-2.037.1-.85.1-1.1.05-.15-.025-.262-.075-.113-.25-.138-.125 0-2.275-.463-2.15-.462-4.35-2.262L7.3 4.1l6.65 3.025q1.275.575 2.013 1.725.737 1.15.737 2.575V22Zm2.025-9.55q.3 0 .5-.213.2-.212.2-.487 0-.125-.05-.325.25-.05.4-.237.15-.188.15-.438 0-.3-.2-.5t-.5-.2q-.25 0-.438.15-.187.15-.237.4L9.4 8.825q.1-.075.3-.575 0-.3-.2-.5t-.5-.2q-.275 0-.488.2-.212.2-.212.5 0 .2.075.3-.25.05-.412.237-.163.188-.163.463t.212.487q.213.213.488.213.225 0 .412-.125.188-.125.263-.325l3.625 1.725q-.05.05-.25.525 0 .275.213.487.212.213.487.213Z"/>
    </Icon>
  );
});

IconMaterialFemurAltRoundedW100Filled.displayName = 'AmauiIconMaterialFemurAltRoundedW100Filled';

export default IconMaterialFemurAltRoundedW100Filled;
