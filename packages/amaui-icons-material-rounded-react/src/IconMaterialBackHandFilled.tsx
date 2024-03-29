import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBackHandFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BackHandFilled'

      short_name='BackHand'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13 24q-2.8 0-4.737-1.55-1.938-1.55-2.788-3.725l-2.9-7.35q-.2-.5.088-.937Q2.95 10 3.475 10q.5 0 1.275.337.775.338 1.1 1.138l1.275 3.2q.025.075.45.325H8V3.25q0-.525.363-.888Q8.725 2 9.25 2t.887.362q.363.363.363.888v8.25q0 .2.15.35.15.15.35.15.2 0 .35-.15.15-.15.15-.35V1.25q0-.525.363-.888Q12.225 0 12.75 0t.887.362Q14 .725 14 1.25V11.5q0 .2.15.35.15.15.35.15.2 0 .35-.15.15-.15.15-.35V2.75q0-.525.363-.888.362-.362.887-.362t.888.362q.362.363.362.888v8.75q0 .2.15.35.15.15.35.15.2 0 .35-.15.15-.15.15-.35V5.75q0-.525.363-.888.362-.362.887-.362t.888.362q.362.363.362.888V16q0 3.35-2.325 5.675Q16.35 24 13 24Z"/>
    </Icon>
  );
});

IconMaterialBackHandFilled.displayName = 'AmauiIconMaterialBackHandFilled';

export default IconMaterialBackHandFilled;
