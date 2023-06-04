import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTableBarW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TableBarW100'

      short_name='TableBar'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m6.95 18.725 1.5-3.7h3.2v-5.05q-3.3-.05-5.538-.775-2.237-.725-2.237-1.7 0-1.05 2.35-1.763 2.35-.712 5.775-.712 3.425 0 5.775.712 2.35.713 2.35 1.763 0 1-2.25 1.712-2.25.713-5.525.763v5.05h3.2l1.5 3.7h-.75l-1.2-3H8.9l-1.2 3ZM12 9.275q2.775 0 4.938-.525 2.162-.525 2.487-1.25-.325-.725-2.487-1.25-2.163-.525-4.938-.525t-4.938.525Q4.9 6.775 4.575 7.5q.325.725 2.487 1.25 2.163.525 4.938.525ZM12 7.5Z"/>
    </Icon>
  );
});

IconMaterialTableBarW100.displayName = 'AmauiIconMaterialTableBarW100';

export default IconMaterialTableBarW100;
