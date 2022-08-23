import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialToolsLadderRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ToolsLadderRoundedW100Filled'
      short_name='ToolsLadder'

      {...props}
    >
      <path d="M6.625 20.35q-.15 0-.237-.138-.088-.137-.038-.262L10.8 3.875q.05-.125.125-.175.075-.05.175-.05.175 0 .263.125.087.125.037.275l-.725 2.6h5.6l.775-2.775q.05-.125.125-.175.075-.05.2-.05.15 0 .238.137.087.138.037.263L13.2 20.125q-.05.125-.125.175-.075.05-.175.05-.175 0-.262-.125-.088-.125-.038-.275l.725-2.6h-5.6l-.775 2.775q-.05.125-.125.175-.075.05-.2.05Zm2.675-8.7h5.6l1.2-4.3h-5.625Zm-1.4 5h5.625l1.175-4.3H9.1Z"/>
    </Icon>
  );
});

IconMaterialToolsLadderRoundedW100Filled.displayName = 'AmauiIconMaterialToolsLadderRoundedW100Filled';

export default IconMaterialToolsLadderRoundedW100Filled;
