import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNightsStayW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NightsStayW100Filled'

      short_name='NightsStay'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 20.7q-.7 0-1.462-.1-.763-.1-1.338-.35.125-.075.3-.25t.25-.3q.2-.25.4-.675.2-.425.2-1.025 0-1.35-.875-2.35t-2.225-1q-.575-1.125-1.475-1.563-.9-.437-1.75-.437h-.312q-.188 0-.388.05-.15-1.325.188-2.7.337-1.375 1.112-2.6.775-1.225 1.95-2.187 1.175-.963 2.65-1.438.275-.1.425.062.15.163.075.438Q9.15 6.75 9.538 8.95q.387 2.2 1.487 3.975t2.8 3.05q1.7 1.275 3.75 1.9.275.1.325.275.05.175-.15.375-1.325 1.175-2.8 1.675-1.475.5-2.95.5Zm-5-1.35H4q-.975 0-1.662-.662Q1.65 18.025 1.65 17q0-.975.688-1.663.687-.687 1.662-.687.75 0 1.4.563.65.562.95 1.437H7q.575 0 .963.388.387.387.387.962t-.387.962q-.388.388-.963.388Z"/>
    </Icon>
  );
});

IconMaterialNightsStayW100Filled.displayName = 'AmauiIconMaterialNightsStayW100Filled';

export default IconMaterialNightsStayW100Filled;
