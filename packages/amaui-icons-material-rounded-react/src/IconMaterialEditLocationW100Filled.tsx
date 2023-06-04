import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEditLocationW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditLocationW100Filled'

      short_name='EditLocation'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.325 13q.075 0 .3-.125L13.4 9.1l-.5-.5-3.775 3.775q-.075.075-.125.3 0 .15.088.237.087.088.237.088Zm4.3-5.125.5.5.55-.55q.075-.075.075-.163 0-.087-.075-.162l-.175-.175q-.075-.075-.162-.075-.088 0-.163.075ZM12 21.2q-.15 0-.275-.037-.125-.038-.25-.138-3.45-3.2-5.137-5.938Q4.65 12.35 4.65 10.2q0-3.45 2.225-5.5T12 2.65q2.9 0 5.125 2.05t2.225 5.5q0 2.15-1.687 4.887-1.688 2.738-5.138 5.938-.1.1-.237.138-.138.037-.288.037Z"/>
    </Icon>
  );
});

IconMaterialEditLocationW100Filled.displayName = 'AmauiIconMaterialEditLocationW100Filled';

export default IconMaterialEditLocationW100Filled;
