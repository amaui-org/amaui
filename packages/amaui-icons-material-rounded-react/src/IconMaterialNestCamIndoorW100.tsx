import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNestCamIndoorW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestCamIndoorW100'

      short_name='NestCamIndoor'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 10.825q-.525 0-.887-.363-.363-.362-.363-.887t.363-.887q.362-.363.887-.363t.887.363q.363.362.363.887t-.363.887q-.362.363-.887.363Zm-4.05 9.25q0-.3.2-.5t.5-.2h3q0-2.225-.487-3.038-.488-.812-2.263-1.987-1.2-.8-1.9-2.025-.7-1.225-.7-2.75 0-2.375 1.663-4.038Q9.625 3.875 12 3.875t4.038 1.662Q17.7 7.2 17.7 9.575q0 1.525-.712 2.8-.713 1.275-1.913 2-1.825 1.15-2.275 1.962-.45.813-.45 3.038h3q.3 0 .488.2.187.2.187.5Zm4.05-5.5q2.075 0 3.538-1.463Q17 11.65 17 9.575t-1.462-3.538Q14.075 4.575 12 4.575q-2.075 0-3.537 1.462Q7 7.5 7 9.575q0 2.075 1.463 3.537Q9.925 14.575 12 14.575Z"/>
    </Icon>
  );
});

IconMaterialNestCamIndoorW100.displayName = 'AmauiIconMaterialNestCamIndoorW100';

export default IconMaterialNestCamIndoorW100;
