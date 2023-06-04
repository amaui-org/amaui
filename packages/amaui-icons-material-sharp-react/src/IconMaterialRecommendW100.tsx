import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRecommendW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RecommendW100'

      short_name='Recommend'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.65 10.15v5.8h6.3l1.9-4.4v-1H11.2l.55-2.8v-.4l-.25-.25ZM12 20.7q-1.8 0-3.387-.688-1.588-.687-2.763-1.862-1.175-1.175-1.863-2.763Q3.3 13.8 3.3 12t.687-3.388Q4.675 7.025 5.85 5.85t2.763-1.863Q10.2 3.3 12 3.3t3.388.687q1.587.688 2.762 1.863t1.863 2.762Q20.7 10.2 20.7 12q0 1.8-.687 3.387-.688 1.588-1.863 2.763-1.175 1.175-2.762 1.862Q13.8 20.7 12 20.7Zm0-8.7Zm0 8q3.325 0 5.663-2.337Q20 15.325 20 12t-2.337-5.663Q15.325 4 12 4T6.338 6.337Q4 8.675 4 12t2.338 5.663Q8.675 20 12 20Z"/>
    </Icon>
  );
});

IconMaterialRecommendW100.displayName = 'AmauiIconMaterialRecommendW100';

export default IconMaterialRecommendW100;
