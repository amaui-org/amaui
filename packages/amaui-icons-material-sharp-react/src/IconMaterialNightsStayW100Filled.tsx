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
      <path d="M4 19.35q-.975 0-1.662-.662Q1.65 18.025 1.65 17q0-.975.688-1.663.687-.687 1.662-.687.75 0 1.4.563.65.562.95 1.437H7q.575 0 .963.388.387.387.387.962t-.387.962q-.388.388-.963.388Zm5.2.9q.525-.35.838-.988.312-.637.312-1.262 0-1.35-.875-2.35t-2.225-1q-.575-1.125-1.475-1.563-.9-.437-1.75-.437h-.312q-.188 0-.388.05-.175-1.4.225-2.85.4-1.45 1.262-2.725Q5.675 5.85 6.975 4.9q1.3-.95 2.925-1.3-.775 2.675-.412 5.062.362 2.388 1.55 4.3 1.187 1.913 3.062 3.226 1.875 1.312 4.15 1.862-1.4 1.425-3.012 2.037-1.613.613-3.238.613-.7 0-1.462-.1-.763-.1-1.338-.35Z"/>
    </Icon>
  );
});

IconMaterialNightsStayW100Filled.displayName = 'AmauiIconMaterialNightsStayW100Filled';

export default IconMaterialNightsStayW100Filled;
