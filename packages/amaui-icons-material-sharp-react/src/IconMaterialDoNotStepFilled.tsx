import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDoNotStepFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoNotStepFilled'

      short_name='DoNotStep'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m18.5 15.675-1.4-1.4L21.575 9.8 23 11.2Zm-2.1-2.125L9.3 6.475 13.8 2l7.075 7.075Zm3.375 9.05-5.95-5.925L10.5 20H1v-3.95q.85-.35 1.675-.713.825-.362 1.625-.862L6.025 16.2l.7-.7-1.65-1.65.388-.388q.187-.187.387-.412L7.5 14.7l.7-.7-1.775-1.775q.15-.275.263-.55.112-.275.187-.575l2.1 2.1.7-.7L1.4 4.225 2.8 2.8l18.375 18.4Z"/>
    </Icon>
  );
});

IconMaterialDoNotStepFilled.displayName = 'AmauiIconMaterialDoNotStepFilled';

export default IconMaterialDoNotStepFilled;
