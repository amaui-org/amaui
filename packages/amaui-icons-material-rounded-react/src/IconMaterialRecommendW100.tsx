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
      <path d="M9.35 15.95h5.2q.2 0 .337-.075.138-.075.213-.275l1.6-3.7q.075-.2.112-.375.038-.175.038-.325v-.35q0-.15-.075-.225-.075-.075-.225-.075H11.2l.55-2.75q.05-.2-.025-.375-.075-.175-.2-.3L11.5 7.1 8.8 10q-.075.075-.112.188-.038.112-.038.262v4.8q0 .3.2.5t.5.2ZM12 20.7q-1.8 0-3.387-.688-1.588-.687-2.763-1.862-1.175-1.175-1.863-2.763Q3.3 13.8 3.3 12t.687-3.388Q4.675 7.025 5.85 5.85t2.763-1.863Q10.2 3.3 12 3.3t3.388.687q1.587.688 2.762 1.863t1.863 2.762Q20.7 10.2 20.7 12q0 1.8-.687 3.387-.688 1.588-1.863 2.763-1.175 1.175-2.762 1.862Q13.8 20.7 12 20.7Zm0-.7q3.35 0 5.675-2.325Q20 15.35 20 12q0-3.35-2.325-5.675Q15.35 4 12 4 8.65 4 6.325 6.325 4 8.65 4 12q0 3.35 2.325 5.675Q8.65 20 12 20Zm0-8Z"/>
    </Icon>
  );
});

IconMaterialRecommendW100.displayName = 'AmauiIconMaterialRecommendW100';

export default IconMaterialRecommendW100;
