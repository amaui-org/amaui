import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBodyFat = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BodyFat'

      short_name='BodyFat'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m17.1 20.75-14-6.95q-.575-.275-.837-.763Q2 12.55 2 12.025T2.263 11q.262-.5.837-.775l14-7q.5-.25 1.013-.213.512.038.937.313.425.275.688.7.262.425.262 1V8q.425 0 .712.287Q21 8.575 21 9t-.288.712Q20.425 10 20 10h-2q-.425 0-.712-.288Q17 9.425 17 9t.288-.713Q17.575 8 18 8V5.075L13.6 7.25q.675 1.075 1.037 2.275Q15 10.725 15 12q0 1.275-.363 2.5-.362 1.225-1.062 2.3l4.4 2.175V16q-.425 0-.7-.288Q17 15.425 17 15t.288-.713Q17.575 14 18 14h2q.425 0 .712.287.288.288.288.713t-.288.712Q20.425 16 20 16v2.975q0 .575-.262 1-.263.425-.688.7-.425.275-.937.3Q17.6 21 17.1 20.75Zm-5.35-4.875q.6-.85.925-1.838Q13 13.05 13 12q0-1.05-.325-2.013-.325-.962-.9-1.837L4 12Z"/>
    </Icon>
  );
});

IconMaterialBodyFat.displayName = 'AmauiIconMaterialBodyFat';

export default IconMaterialBodyFat;
