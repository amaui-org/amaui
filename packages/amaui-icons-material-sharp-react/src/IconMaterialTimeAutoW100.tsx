import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTimeAutoW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TimeAutoW100'

      short_name='TimeAuto'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.775 16.6h.75l.775-2.25h3.325l.775 2.25h.75l-2.7-7.8h-.975Zm1.775-2.95 1.425-4.1 1.4 4.1ZM9.5 2.35v-.7h5v.7ZM12 20.7q-1.6 0-3-.6t-2.45-1.65Q5.5 17.4 4.9 16q-.6-1.4-.6-3t.6-3q.6-1.4 1.65-2.45Q7.6 6.5 9 5.9q1.4-.6 3-.6 1.425 0 2.763.525Q16.1 6.35 17.2 7.3l1-1 .5.5-1 1q.95 1.1 1.475 2.437.525 1.338.525 2.763 0 1.6-.6 3t-1.65 2.45Q16.4 19.5 15 20.1q-1.4.6-3 .6Zm0-.7q2.9 0 4.95-2.05Q19 15.9 19 13q0-2.9-2.05-4.95Q14.9 6 12 6 9.1 6 7.05 8.05 5 10.1 5 13q0 2.9 2.05 4.95Q9.1 20 12 20Z"/>
    </Icon>
  );
});

IconMaterialTimeAutoW100.displayName = 'AmauiIconMaterialTimeAutoW100';

export default IconMaterialTimeAutoW100;
