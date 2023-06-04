import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNotStartedW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NotStartedW100'

      short_name='NotStarted'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m12.775 14.375 3.05-2.05q.1-.05.138-.137Q16 12.1 16 12t-.037-.188q-.038-.087-.138-.137l-3.05-2.05q-.2-.125-.412-.025-.213.1-.213.35v4.1q0 .25.213.35.212.1.412-.025Zm-3.275.4q.15 0 .25-.1t.1-.25V9.55q0-.15-.1-.238-.1-.087-.25-.087t-.25.1q-.1.1-.1.25v4.875q0 .15.1.238.1.087.25.087ZM12 20.7q-1.8 0-3.387-.688-1.588-.687-2.763-1.862-1.175-1.175-1.863-2.763Q3.3 13.8 3.3 12t.687-3.388Q4.675 7.025 5.85 5.85t2.763-1.863Q10.2 3.3 12 3.3t3.388.687q1.587.688 2.762 1.863t1.863 2.762Q20.7 10.2 20.7 12q0 1.8-.687 3.387-.688 1.588-1.863 2.763-1.175 1.175-2.762 1.862Q13.8 20.7 12 20.7Zm0-.7q3.325 0 5.663-2.337Q20 15.325 20 12t-2.337-5.663Q15.325 4 12 4T6.338 6.337Q4 8.675 4 12t2.338 5.663Q8.675 20 12 20Zm0-8Z"/>
    </Icon>
  );
});

IconMaterialNotStartedW100.displayName = 'AmauiIconMaterialNotStartedW100';

export default IconMaterialNotStartedW100;
