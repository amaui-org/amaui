import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWhereToVoteW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WhereToVoteW100Filled'

      short_name='WhereToVote'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.95 12.075q.15 0 .275-.05.125-.05.25-.175l3.275-3.275q.125-.125.125-.25t-.125-.25q-.125-.125-.25-.125t-.25.125l-3.3 3.3-1.15-1.15q-.125-.125-.25-.125t-.25.125q-.125.125-.125.25t.125.25l1.125 1.125q.125.125.25.175.125.05.275.05ZM12 21.2q-.15 0-.275-.037-.125-.038-.25-.138-3.45-3.2-5.137-5.938Q4.65 12.35 4.65 10.2q0-3.45 2.225-5.5T12 2.65q2.9 0 5.125 2.05t2.225 5.5q0 2.15-1.687 4.887-1.688 2.738-5.138 5.938-.1.1-.237.138-.138.037-.288.037Z"/>
    </Icon>
  );
});

IconMaterialWhereToVoteW100Filled.displayName = 'AmauiIconMaterialWhereToVoteW100Filled';

export default IconMaterialWhereToVoteW100Filled;
