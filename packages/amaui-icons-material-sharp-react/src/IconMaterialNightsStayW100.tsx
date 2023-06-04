import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNightsStayW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NightsStayW100'

      short_name='NightsStay'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.2 20.25q.125-.075.3-.25t.25-.3q.45.15 1.038.225.587.075 1.312.075 1.325 0 2.6-.462 1.275-.463 2.15-1.188-2.2-.75-3.862-2.125-1.663-1.375-2.713-3.175-1.05-1.8-1.412-3.95Q8.5 6.95 8.9 4.65 6.55 5.6 5.225 7.8 3.9 10 4.025 12.65h-.312q-.188 0-.388.05-.175-1.4.225-2.85.4-1.45 1.262-2.725Q5.675 5.85 6.975 4.9q1.3-.95 2.925-1.3-.775 2.675-.412 5.062.362 2.388 1.55 4.3 1.187 1.913 3.062 3.226 1.875 1.312 4.15 1.862-1.4 1.425-3.012 2.037-1.613.613-3.238.613-.7 0-1.462-.1-.763-.1-1.338-.35Zm-2.2-.9H4q-.975 0-1.662-.662Q1.65 18.025 1.65 17q0-.975.688-1.663.687-.687 1.662-.687.75 0 1.4.563.65.562.95 1.437H7q.575 0 .963.388.387.387.387.962t-.387.962q-.388.388-.963.388Zm3.35-7.025Z"/>
    </Icon>
  );
});

IconMaterialNightsStayW100.displayName = 'AmauiIconMaterialNightsStayW100';

export default IconMaterialNightsStayW100;
