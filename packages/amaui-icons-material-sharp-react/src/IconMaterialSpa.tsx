import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSpa = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Spa'

      short_name='Spa'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 22q-1.825-.225-3.625-.988-1.8-.762-3.213-2.187-1.412-1.425-2.287-3.6T2 10V9h1q1.275 0 2.625.325t2.525.975q.3-2.15 1.363-4.413Q10.575 3.625 12 2q1.425 1.625 2.488 3.887Q15.55 8.15 15.85 10.3q1.175-.65 2.525-.975Q19.725 9 21 9h1v1q0 3.05-.875 5.225t-2.288 3.6q-1.412 1.425-3.199 2.187Q13.85 21.775 12 22Zm-.05-2.05q-.275-4.15-2.462-6.275Q7.3 11.55 4.05 11.05q.275 4.275 2.538 6.375 2.262 2.1 5.362 2.525ZM12 13.6q.375-.55.913-1.138.537-.587 1.037-1.012-.05-1.425-.563-2.975Q12.875 6.925 12 5.45q-.875 1.475-1.387 3.025-.513 1.55-.563 2.975.5.425 1.05 1.012.55.588.9 1.138Zm1.95 5.9q.925-.3 1.925-.875t1.863-1.563q.862-.987 1.475-2.462.612-1.475.737-3.55-2.35.35-4.125 1.562Q14.05 13.825 13.1 15.7q.3.8.513 1.75.212.95.337 2.05ZM12 13.6Zm1.95 5.9Zm-2 .45Zm1.15-4.25ZM12 22Z"/>
    </Icon>
  );
});

IconMaterialSpa.displayName = 'AmauiIconMaterialSpa';

export default IconMaterialSpa;
