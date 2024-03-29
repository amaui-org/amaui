import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDoNotTouchFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoNotTouchFilled'

      short_name='DoNotTouch'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.975 22q-.625 0-1.187-.25-.563-.25-.988-.7L2.675 14.6q-.275-.3-.262-.725.012-.425.312-.7l.425-.4q.275-.25.6-.275.325-.025.65.15L7 14.125v-4.3l-4.9-4.9q-.275-.275-.275-.688 0-.412.275-.712.3-.3.712-.3.413 0 .713.3L20.5 20.5q.3.3.288.7-.013.4-.313.7-.3.275-.7.288-.4.012-.7-.288l-.425-.425q-.35.25-.762.388Q17.475 22 17 22ZM20 17.175l-6.25-6.25q.1-.05.175-.163Q14 10.65 14 10.5V3.25q0-.525.363-.888Q14.725 2 15.25 2t.887.362q.363.363.363.888v7.25q0 .2.15.35.15.15.35.15.2 0 .35-.15.15-.15.15-.35V5.25q0-.525.363-.888Q18.225 4 18.75 4t.888.362q.362.363.362.888Zm-7-7-2.5-2.5V2.25q0-.525.363-.888Q11.225 1 11.75 1t.887.362q.363.363.363.888Zm-3.5-3.5L7 4.175q.05-.5.4-.838Q7.75 3 8.25 3q.525 0 .887.362.363.363.363.888Z"/>
    </Icon>
  );
});

IconMaterialDoNotTouchFilled.displayName = 'AmauiIconMaterialDoNotTouchFilled';

export default IconMaterialDoNotTouchFilled;
