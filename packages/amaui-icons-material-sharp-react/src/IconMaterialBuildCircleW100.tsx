import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBuildCircleW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BuildCircleW100'

      short_name='BuildCircle'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.325 11.075 7.275 9.05q-.125.275-.2.587Q7 9.95 7 10.3q0 1.3.925 2.225t2.225.925q.4 0 .75-.1t.7-.25l4.225 4.225 1.35-1.35-4.225-4.225q.175-.3.263-.663.087-.362.087-.787 0-1.3-.925-2.212-.925-.913-2.225-.913-.35 0-.65.075-.3.075-.575.2l2 2.025ZM12 20.7q-1.8 0-3.387-.688-1.588-.687-2.763-1.862-1.175-1.175-1.863-2.763Q3.3 13.8 3.3 12t.687-3.388Q4.675 7.025 5.85 5.85t2.763-1.863Q10.2 3.3 12 3.3t3.388.687q1.587.688 2.762 1.863t1.863 2.762Q20.7 10.2 20.7 12q0 1.8-.687 3.387-.688 1.588-1.863 2.763-1.175 1.175-2.762 1.862Q13.8 20.7 12 20.7Zm0-8.7Zm0 8q3.325 0 5.663-2.337Q20 15.325 20 12t-2.337-5.663Q15.325 4 12 4T6.338 6.337Q4 8.675 4 12t2.338 5.663Q8.675 20 12 20Z"/>
    </Icon>
  );
});

IconMaterialBuildCircleW100.displayName = 'AmauiIconMaterialBuildCircleW100';

export default IconMaterialBuildCircleW100;
