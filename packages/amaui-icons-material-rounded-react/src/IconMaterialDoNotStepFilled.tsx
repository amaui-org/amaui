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
      <path d="m18.5 15.675-1.4-1.4L21.575 9.8q.525.475.538 1.388.012.912-.538 1.437Zm-2.1-2.125L9.3 6.475 12.375 3.4q.575-.575 1.413-.575.837 0 1.412.575l5.675 5.675Zm2.675 8.35-5.25-5.225-2.75 2.75q-.275.275-.637.425-.363.15-.763.15H3q-.825 0-1.412-.587Q1 18.825 1 18v-.625q0-.65.363-1.15.362-.5.937-.725.425-.175.937-.425.513-.25 1.038-.6L5.65 15.85Q5.8 16 6 16q.2 0 .35-.15.15-.15.15-.35 0-.2-.15-.35l-1.275-1.3.388-.388q.187-.187.387-.412l1.275 1.275q.15.15.35.15.2 0 .35-.15.15-.15.15-.35 0-.2-.15-.35l-1.4-1.4q.15-.275.263-.55.112-.275.187-.575l1.7 1.725q.15.15.35.15.2 0 .35-.15.15-.15.163-.35.012-.2-.138-.35l-7.2-7.2q-.275-.275-.275-.688 0-.412.275-.712.3-.3.712-.3.413 0 .713.3L20.475 20.5q.275.275.288.688.012.412-.288.712-.275.275-.7.275-.425 0-.7-.275Z"/>
    </Icon>
  );
});

IconMaterialDoNotStepFilled.displayName = 'AmauiIconMaterialDoNotStepFilled';

export default IconMaterialDoNotStepFilled;
