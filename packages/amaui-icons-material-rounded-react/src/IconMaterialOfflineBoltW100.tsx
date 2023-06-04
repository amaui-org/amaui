import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOfflineBoltW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OfflineBoltW100'

      short_name='OfflineBolt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.05 12.85v4.025q0 .225.213.263.212.037.262-.163l1.625-5.25q.05-.2-.05-.388-.1-.187-.3-.187h-1.7V7q0-.225-.212-.263-.213-.037-.263.163L9.9 12.275q-.05.2.05.387.1.188.3.188ZM12 20.7q-1.8 0-3.387-.688-1.588-.687-2.763-1.862-1.175-1.175-1.863-2.763Q3.3 13.8 3.3 12t.687-3.388Q4.675 7.025 5.85 5.85t2.763-1.863Q10.2 3.3 12 3.3t3.388.687q1.587.688 2.762 1.863t1.863 2.762Q20.7 10.2 20.7 12q0 1.8-.687 3.387-.688 1.588-1.863 2.763-1.175 1.175-2.762 1.862Q13.8 20.7 12 20.7Zm0-8.45ZM12 20q3.325 0 5.663-2.337Q20 15.325 20 12t-2.337-5.663Q15.325 4 12 4T6.338 6.337Q4 8.675 4 12t2.338 5.663Q8.675 20 12 20Z"/>
    </Icon>
  );
});

IconMaterialOfflineBoltW100.displayName = 'AmauiIconMaterialOfflineBoltW100';

export default IconMaterialOfflineBoltW100;
