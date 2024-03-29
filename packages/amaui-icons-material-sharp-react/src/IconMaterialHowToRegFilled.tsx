import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHowToRegFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HowToRegFilled'

      short_name='HowToReg'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10 12q-1.65 0-2.825-1.175Q6 9.65 6 8q0-1.65 1.175-2.825Q8.35 4 10 4q1.65 0 2.825 1.175Q14 6.35 14 8q0 1.65-1.175 2.825Q11.65 12 10 12Zm5.55 8.4-3.45-3.45 1.4-1.4 2.05 2.05 5.05-5.05 1.4 1.4ZM2 20v-2.8q0-.825.425-1.55.425-.725 1.175-1.1 1.275-.65 2.875-1.1Q8.075 13 10 13q.75 0 1.463.075.712.075 1.387.225L9.2 16.95 12.25 20Z"/>
    </Icon>
  );
});

IconMaterialHowToRegFilled.displayName = 'AmauiIconMaterialHowToRegFilled';

export default IconMaterialHowToRegFilled;
