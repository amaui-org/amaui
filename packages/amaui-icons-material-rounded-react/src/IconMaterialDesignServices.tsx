import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDesignServices = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DesignServices'

      short_name='DesignServices'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 21v-4.25l4.5-4.5-3.875-3.9q-.3-.3-.437-.675-.138-.375-.138-.75t.138-.737q.137-.363.437-.663l1.9-1.9q.3-.3.675-.438.375-.137.75-.137t.738.137q.362.138.662.438l3.9 3.9 4.475-4.5q.15-.15.325-.225.175-.075.375-.075t.387.075q.188.075.338.225l2.825 2.825q.15.15.225.325.075.175.075.375t-.075.388q-.075.187-.225.337L16.5 11.75l3.875 3.9q.3.3.437.675.138.375.138.75t-.138.737q-.137.363-.437.663l-1.9 1.9q-.3.3-.663.437-.362.138-.737.138t-.75-.138q-.375-.137-.675-.437l-3.9-3.9L7.25 21Zm5.925-10.175 1.9-1.9-1.2-1.2-1.2 1.175-1.4-1.4L8.2 6.3 6.925 5.05 5.05 6.95Zm8.125 8.125 1.9-1.9-1.275-1.25-1.175 1.175-1.425-1.4 1.2-1.2-1.225-1.2-1.9 1.9ZM5 19h1.4l9.625-9.6L14.6 7.975 5 17.6ZM17.425 7.975 18.85 6.55l-1.425-1.4-1.4 1.4Z"/>
    </Icon>
  );
});

IconMaterialDesignServices.displayName = 'AmauiIconMaterialDesignServices';

export default IconMaterialDesignServices;
