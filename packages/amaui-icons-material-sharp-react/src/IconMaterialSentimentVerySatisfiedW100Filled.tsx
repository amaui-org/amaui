import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSentimentVerySatisfiedW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SentimentVerySatisfiedW100Filled'

      short_name='SentimentVerySatisfied'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 16.7q1.2 0 2.363-.638 1.162-.637 1.887-2.062h-8.5q.725 1.425 1.887 2.062Q10.8 16.7 12 16.7Zm-4.2-6.25 1.1-1.1 1.1 1.1.5-.5-1.6-1.6-1.6 1.6Zm6.2 0 1.1-1.1 1.1 1.1.5-.5-1.6-1.6-1.6 1.6ZM12 20.7q-1.8 0-3.387-.688-1.588-.687-2.763-1.862-1.175-1.175-1.863-2.763Q3.3 13.8 3.3 12t.687-3.388Q4.675 7.025 5.85 5.85t2.763-1.863Q10.2 3.3 12 3.3t3.388.687q1.587.688 2.762 1.863t1.863 2.762Q20.7 10.2 20.7 12q0 1.8-.687 3.387-.688 1.588-1.863 2.763-1.175 1.175-2.762 1.862Q13.8 20.7 12 20.7Z"/>
    </Icon>
  );
});

IconMaterialSentimentVerySatisfiedW100Filled.displayName = 'AmauiIconMaterialSentimentVerySatisfiedW100Filled';

export default IconMaterialSentimentVerySatisfiedW100Filled;
