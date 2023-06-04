import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSentimentVeryDissatisfiedW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SentimentVeryDissatisfiedW100Filled'

      short_name='SentimentVeryDissatisfied'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 13.5q-1.2 0-2.363.637-1.162.638-1.887 2.063h8.5q-.725-1.425-1.887-2.063Q13.2 13.5 12 13.5Zm-4.3-2.05 1.1-1.05 1.05 1.05.5-.5L9.3 9.9l1.05-1.1-.5-.5L8.8 9.35 7.7 8.3l-.5.5 1.05 1.1-1.05 1.05Zm6.45 0 1.05-1.05 1.1 1.05.5-.5-1.05-1.05 1.05-1.1-.5-.5-1.1 1.05-1.05-1.05-.5.5 1.05 1.1-1.05 1.05ZM12 20.7q-1.8 0-3.387-.688-1.588-.687-2.763-1.862-1.175-1.175-1.863-2.763Q3.3 13.8 3.3 12t.687-3.388Q4.675 7.025 5.85 5.85t2.763-1.863Q10.2 3.3 12 3.3t3.388.687q1.587.688 2.762 1.863t1.863 2.762Q20.7 10.2 20.7 12q0 1.8-.687 3.387-.688 1.588-1.863 2.763-1.175 1.175-2.762 1.862Q13.8 20.7 12 20.7Z"/>
    </Icon>
  );
});

IconMaterialSentimentVeryDissatisfiedW100Filled.displayName = 'AmauiIconMaterialSentimentVeryDissatisfiedW100Filled';

export default IconMaterialSentimentVeryDissatisfiedW100Filled;
